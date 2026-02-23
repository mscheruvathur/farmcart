import beveragesImage from '../assets/Beverages.png';
import datesImage from '../assets/Dates.png';
import fruitsImage from '../assets/Fruits.png';
import nutsImage from '../assets/Nuts.png';
import spicesImage from '../assets/Spices.png';
import vegetableImage from '../assets/Vegetable.png';

const categories = [
  {
    title: 'Fruits',
    image: fruitsImage,
  },
  {
    title: 'Vegetable',
    image: vegetableImage,
  },
  {
    title: 'Spices',
    image: spicesImage,
  },
  {
    title: 'Nuts',
    image: nutsImage,
  },
  {
    title: 'Dates',
    image: datesImage,
  },
  {
    title: 'Beverages',
    image: beveragesImage,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-10 md:py-12" aria-label="Product categories">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 place-items-center gap-x-4 gap-y-6 px-4 sm:gap-x-6 sm:gap-y-8 sm:px-6 md:grid-cols-3 md:gap-x-10 md:gap-y-10 md:px-10">
        {categories.map((category) => (
          <article key={category.title} className="flex flex-col items-center">
            <div className="flex h-[140px] w-[140px] items-center justify-center sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px] lg:h-[324px] lg:w-[324px]">
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-2 text-[16px] font-semibold text-[#3a3e45] sm:mt-3 sm:text-[24px] md:mt-4 md:text-[40px]">{category.title}</h3>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center sm:mt-8 md:mt-10">
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-lg bg-primary px-5 text-[20px] font-medium leading-none text-white transition hover:brightness-110 sm:h-11 sm:px-7 sm:text-[28px] md:h-12 md:px-8 md:text-[32px]"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
