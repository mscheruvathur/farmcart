import { useEffect, useRef, useState } from 'react';
import orangeImage from '../assets/orange-bg.jpg';

const bannerStats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '150+', label: 'Product Varieties' },
  { value: '50+', label: 'Trusted Partners' },
  { value: '1100+', label: 'Happy Customers' },
];

export function OrangeBannerSection() {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const backgroundTranslateY = 72 - scrollProgress * 144;

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (!bannerRef.current) {
        return;
      }

      const bannerRect = bannerRef.current.getBoundingClientRect();
      const bannerHitPadding = 120;
      const isCursorInsideBanner =
        event.clientX >= bannerRect.left - bannerHitPadding &&
        event.clientX <= bannerRect.right + bannerHitPadding &&
        event.clientY >= bannerRect.top - bannerHitPadding &&
        event.clientY <= bannerRect.bottom + bannerHitPadding;

      if (!isCursorInsideBanner) {
        return;
      }

      const baseStep = 1 / (bannerStats.length * 8);
      const wheelScale = Math.min(Math.abs(event.deltaY), 120) / 120;
      const step = baseStep * (0.75 + wheelScale * 0.5);
      const isForward = event.deltaY > 0;
      const isBackward = event.deltaY < 0;

      if (isForward && scrollProgress < 1) {
        event.preventDefault();
        setScrollProgress((previous) => Math.min(previous + step, 1));
        return;
      }

      if (isBackward && scrollProgress > 0) {
        event.preventDefault();
        setScrollProgress((previous) => Math.max(previous - step, 0));
        return;
      }

      if (scrollProgress > 0 && scrollProgress < 1) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [scrollProgress]);

  const getStatAnimation = (index: number) => {
    const segment = 1 / bannerStats.length;
    const start = index * segment;
    const end = start + segment;
    const localProgress = Math.min(Math.max((scrollProgress - start) / Math.max(end - start, 0.0001), 0), 1);
    const eased = localProgress * localProgress * (3 - 2 * localProgress);

    return {
      translateY: (1 - eased) * 70,
      opacity: 0.35 + eased * 0.65,
      blur: (1 - eased) * 6,
    };
  };

  return (
    <section className="w-full">
      <div className="sticky top-[70px] md:top-[80px]">
        <div ref={bannerRef} className="relative h-[260px] w-full overflow-hidden sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[520px]">
          <img
            src={orangeImage}
            alt="Fresh oranges"
            className="absolute left-0 top-[-20%] h-[140%] w-full object-cover object-[center_72%]"
            style={{ transform: `translateY(${backgroundTranslateY}px)`, transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1)', willChange: 'transform' }}
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
                      index < 2 ? '-translate-x-2 sm:-translate-x-4 md:-translate-x-6' : 'translate-x-2 sm:translate-x-4 md:translate-x-6'
                    }`}
                  >
                    <div
                      style={{
                        transform: `translateY(${animation.translateY}px)`,
                        opacity: animation.opacity,
                        filter: `blur(${animation.blur}px)`,
                        transition:
                          'transform 360ms cubic-bezier(0.16, 1, 0.3, 1), opacity 360ms cubic-bezier(0.16, 1, 0.3, 1), filter 360ms cubic-bezier(0.16, 1, 0.3, 1)',
                        willChange: 'transform, opacity, filter',
                      }}
                    >
                      <span className="text-[44px] font-semibold leading-none sm:text-[52px] md:text-[58px]">{stat.value}</span>
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
      </div>
    </section>
  );
}
