import freshImage from "../assets/fresh.jpg";
import partner1 from "../assets/p1.png";
import partner2 from "../assets/p2.png";
import partner3 from "../assets/p3.jpg";
import partner4 from "../assets/p4.png";
import partner5 from "../assets/p5.jpg";
import partner6 from "../assets/p6.png";
import partner7 from "../assets/p7.png";
import partner8 from "../assets/p8.png";

const partners = [
  { name: "Partner 1", image: partner1 },
  { name: "Partner 2", image: partner2 },
  { name: "Partner 3", image: partner3 },
  { name: "Partner 4", image: partner4 },
  { name: "Partner 5", image: partner5 },
  { name: "Partner 6", image: partner6 },
  { name: "Partner 7", image: partner7 },
  { name: "Partner 8", image: partner8 },
];

export function PartnersSection() {
  return (
    <section id="partners" className="bg-white px-4 pb-10 sm:px-6 sm:pb-12 md:px-8 md:pb-16" aria-label="Partners">
      <div className="mx-auto w-full max-w-[1500px] pt-6 sm:pt-8 md:pt-10">
        <div className="relative h-[180px] overflow-hidden sm:h-[200px] md:h-[390px]">
        <img
          src={freshImage}
          alt="Fresh food and vegetables"
          className="h-full w-full object-cover object-[center_83%]"
          loading="lazy"
        />

          <div className="absolute inset-0" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 text-white sm:px-8 md:px-10">
              <h2 className="max-w-[240px] text-[26px] font-semibold leading-[1.08] sm:max-w-[300px] sm:text-[34px] md:max-w-[360px] md:text-[44px]">
                Fresh Food
                <br />
                Reliable Supply
              </h2>

              <a
                href="#contact"
                className="mt-3 inline-flex h-8 items-center rounded-[10px] bg-white px-3 text-[22px] font-medium leading-none text-[#c7384a] sm:mt-4 sm:h-9 sm:px-4 sm:text-[25px]"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 w-full max-w-[1100px] bg-transparent py-4 sm:mt-9 sm:py-6 md:mt-10 md:py-8">
        <h3 className="text-center text-[52px] font-medium leading-[0.95] text-[#0f1014] sm:text-[56px] md:text-[64px]">
          Our Freshness Partners
        </h3>

        <div className="mx-auto mt-6 grid max-w-[1860px] grid-cols-2 place-items-center gap-x-8 gap-y-10 sm:mt-8 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-12">
          {partners.map((partner, index) => (
            <article key={`${partner.name}-${index}`} className="flex h-[72px] items-center justify-center sm:h-[82px]">
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full w-auto object-contain"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
