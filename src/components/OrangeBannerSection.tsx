import orangeImage from '../assets/orange-bg.jpg';

export function OrangeBannerSection() {
  return (
    <section className="w-full">
      <div className="h-[280px] w-full sm:h-[380px] md:h-[650px] lg:h-[720px] xl:h-[780px]">
        <img
          src={orangeImage}
          alt="Fresh oranges"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
