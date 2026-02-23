import orangeImage from '../assets/orange-bg.png';

export function OrangeBannerSection() {
  return (
    <section className="w-full">
      <div className="h-[280px] w-full sm:h-[380px] md:h-[500px]">
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
