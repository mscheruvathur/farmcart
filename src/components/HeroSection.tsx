import heroLogo from "../assets/farmcart-hero-logo.png";

export function HeroSection() {
  return (
    <section id="hero" className="overflow-hidden bg-[#039448]">
      <div className="mx-auto min-h-[500px] w-full max-w-[1440px] px-4 py-8 sm:min-h-[580px] sm:px-6 md:h-[641px] md:px-8 md:py-0 lg:h-[680px] lg:px-12 xl:h-[720px] xl:px-16">
        <div className="relative grid h-full items-center gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="relative z-10 text-center md:pl-1 md:text-left">
            <h1 className="mx-auto max-w-[460px] text-[36px] font-medium leading-[1.1] text-white sm:text-[48px] md:mx-0 md:text-[72px] md:leading-[0.96] lg:text-[80px]">
              Freshness
              <br />
              that fuels <em className="font-normal italic">your</em>
              <br />
              day.
            </h1>

            <p className="mt-4 text-[18px] font-medium text-white sm:text-[20px] md:mt-7 md:text-[24px]">
              Providing Quality Products
            </p>

            <a
              href="#services"
              className="mt-5 inline-flex h-10 items-center rounded-lg bg-accent px-5 text-[20px] font-medium leading-none text-[#1f1f1f] transition hover:brightness-105 sm:h-11 sm:px-6 sm:text-[24px] md:mt-7 md:h-12 md:px-7 md:text-[32px]"
            >
              Shop Now
            </a>
          </div>

          <div className="relative z-10 flex items-center justify-center md:justify-end">
            <img
              src={heroLogo}
              alt="Farmcart logo"
              className="h-[180px] w-auto object-contain sm:h-[280px] md:h-[520px] lg:h-[560px] xl:h-[600px]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
