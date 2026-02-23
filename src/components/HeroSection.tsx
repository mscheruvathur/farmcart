import heroLogo from '../assets/farmcart-hero-logo.png';

export function HeroSection() {
  return (
    <section id="hero" className="bg-[#039448]">
      <div className="mx-auto min-h-[500px] w-full max-w-[1440px] px-4 py-8 sm:min-h-[580px] sm:px-6 md:h-[641px] md:px-8 md:py-0">
        <div className="grid h-full items-center gap-6 sm:gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="text-center md:pl-1 md:text-left">
          <h1 className="mx-auto max-w-[460px] text-[36px] font-medium leading-[1.1] text-white sm:text-[48px] md:mx-0 md:text-[72px] md:leading-[0.96]">
            Freshness that fuels your day.
          </h1>
          <p className="mt-4 text-[18px] font-medium text-white sm:text-[20px] md:mt-7 md:text-[24px]">Providing Quality Products</p>
          <a
            href="#services"
            className="mt-5 inline-flex h-10 items-center rounded-lg bg-accent px-5 text-[20px] font-medium leading-none text-[#1f1f1f] transition hover:brightness-105 sm:h-11 sm:px-6 sm:text-[24px] md:mt-7 md:h-12 md:px-7 md:text-[32px]"
          >
            Shop Now
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <img
            src={heroLogo}
            alt="Farmcart logo"
            className="h-[180px] w-auto object-contain sm:h-[280px] md:h-[420px]"
            loading="eager"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
