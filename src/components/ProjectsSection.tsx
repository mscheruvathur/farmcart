import freshImage from "../assets/fresh.jpg";
import carrefourLogo from "../assets/Carrefour.png";
import nestoLogo from "../assets/Nesto.png";
import unionLogo from "../assets/Union.png";

const partners = [
  { name: "Nesto", image: nestoLogo, outlined: true },
  { name: "Carrefour", image: carrefourLogo },
  { name: "Union", image: unionLogo },
  { name: "Nesto", image: nestoLogo },
  { name: "Carrefour", image: carrefourLogo },
  { name: "Union", image: unionLogo },
];

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Promotions and partners">
      <div className="relative h-[240px] w-full overflow-hidden sm:h-[320px] md:h-[544px] lg:h-[600px]">
        {/* Image with slightly cooled tone */}
        <img
          src={freshImage}
          alt="Fresh mixed fruits"
          className="h-full w-full object-cover brightness-90 contrast-110 saturate-75"
          loading="lazy"
        />

        {/* Uniform black shade overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-6 text-white sm:px-8 md:px-12 lg:px-16">
            <h2 className="max-w-[280px] text-[32px] font-medium leading-[1.15] sm:max-w-[380px] sm:text-[44px] md:max-w-[588px] md:text-[76px] md:leading-[1.05] lg:text-[84px]">
              Fresh Food. Reliable Supply.
            </h2>

            <a
              id="contact"
              href="#contact"
              className="mt-4 inline-flex items-center rounded-xl bg-accent px-8 py-3 text-[22px] font-semibold leading-none text-white shadow-lg transition hover:brightness-105 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:px-10 sm:py-4 sm:text-[26px] md:mt-7 md:text-[32px]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20">
        <h3 className="text-center text-[32px] font-medium leading-[1.1] text-[#0f1014] sm:text-[42px] md:text-[58px] md:leading-[1.02] lg:text-[68px]">
          Our Freshness Partners
        </h3>

        <div className="mx-auto mt-6 grid max-w-[980px] grid-cols-1 gap-x-4 gap-y-5 sm:mt-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 md:mt-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
          {partners.map((partner, index) => (
            <article
              key={`${partner.name}-${index}`}
              className="flex h-[108px] items-center justify-center sm:h-[130px] md:h-[140px] lg:h-[150px]"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className={`h-[80px] w-auto object-contain sm:h-[100px] md:h-[120px] ${
                  partner.outlined ? "border-2 border-[#3a9fff]" : ""
                }`}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
