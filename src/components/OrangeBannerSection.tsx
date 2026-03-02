import orangeImage from '../assets/orange-bg.jpg';

const bannerStats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '150+', label: 'Product Varieties' },
  { value: '50+', label: 'Trusted Partners' },
  { value: '1100+', label: 'Happy Customers' },
];

interface OrangeBannerSectionProps {
  enterProgress: number;
  exitProgress: number;
}

export function OrangeBannerSection({ enterProgress, exitProgress }: OrangeBannerSectionProps) {

  // totalProgress 0→2 spans both enter and exit phases.
  // Spread the same 144px parallax range across the full sticky duration
  // so the image keeps drifting upward while the text animates out.
  const totalProgress = enterProgress + exitProgress;
  const backgroundTranslateY = 72 - totalProgress * 72;

  // Stats fade IN sequentially (index 0 first)
  const getEnterAnimation = (index: number) => {
    const segment = 1 / bannerStats.length;
    const start = index * segment;
    const end = start + segment;
    const local = Math.min(Math.max((enterProgress - start) / Math.max(end - start, 0.0001), 0), 1);
    const eased = local * local * (3 - 2 * local);
    return {
      translateY: (1 - eased) * 70,
      opacity: 0.35 + eased * 0.65,
      blur: (1 - eased) * 6,
    };
  };

  // Stats fade OUT sequentially (index 0 first — same order as enter)
  const getExitAnimation = (index: number) => {
    const segment = 1 / bannerStats.length;
    const start = index * segment;
    const end = start + segment;
    const local = Math.min(Math.max((exitProgress - start) / Math.max(end - start, 0.0001), 0), 1);
    const eased = local * local * (3 - 2 * local);
    return {
      translateY: eased * -70,           // slides upward
      opacity: 1 - eased * 0.65,
      blur: eased * 6,
    };
  };

  const getStatAnimation = (index: number) => {
    if (exitProgress > 0) return getExitAnimation(index);
    return getEnterAnimation(index);
  };

  return (
    <section aria-label="Stats banner" className="relative w-full">
      <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[520px]">
          
          <img
            src={orangeImage}
            alt="Fresh oranges"
            className="absolute left-0 top-[-20%] h-[140%] w-full object-cover object-[center_72%]"
            style={{
              transform: `translateY(${backgroundTranslateY}px)`,
              transition: 'transform 200ms linear',
            }}
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="grid w-full max-w-[900px] grid-cols-2 gap-x-6 gap-y-8 text-white sm:gap-x-10 md:gap-x-16 md:gap-y-10">
              
              {bannerStats.map((stat, index) => {
                const animation = getStatAnimation(index);

                return (
                  <article
                    key={stat.label}
                    className={`flex items-start justify-center ${
                      index < 2
                        ? '-translate-x-2 sm:-translate-x-4 md:-translate-x-6'
                        : 'translate-x-2 sm:translate-x-4 md:translate-x-6'
                    }`}
                  >
                    <div
                      style={{
                        transform: `translateY(${animation.translateY}px)`,
                        opacity: animation.opacity,
                        filter: `blur(${animation.blur}px)`,
                        transition: 'all 200ms linear',
                      }}
                    >
                      <span className="text-[44px] font-semibold leading-none sm:text-[52px] md:text-[58px]">
                        {stat.value}
                      </span>
                      <span className="ml-2 inline-block max-w-[170px] text-[28px] font-medium leading-[1.03] sm:ml-3 sm:text-[33px] md:text-[38px]">
                        {stat.label}
                      </span>
                    </div>
                  </article>
                );
              })}

            </div>
          </div>
        </div>
      </section>
  );
}