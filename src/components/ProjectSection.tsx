import beveragesImage from '../assets/Beverages.png';
import datesImage from '../assets/Dates.png';
import fruitsImage from '../assets/Fruits.png';
import nutsImage from '../assets/Nuts.png';
import shopNowImage from '../assets/shop_now.png';
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

export function ProjectSection() {
  return (
    <section id="projects" className="bg-white py-10 sm:py-12 lg:py-14" aria-label="Project categories">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 place-items-center gap-x-4 gap-y-8 px-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:px-6 md:px-10 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
        {categories.map((category) => (
          <article key={category.title} className="flex flex-col items-center">
            <div className="flex h-[100px] w-[100px] items-center justify-center">
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-3 text-[22px] font-semibold text-[#3a3e45] sm:mt-4 sm:text-[28px] md:text-[32px] lg:text-[40px]">{category.title}</h3>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center sm:mt-8 md:mt-10">
        <img src={shopNowImage} alt="Shop now" className="h-[100px] w-[150px]" loading="lazy" />
      </div>
    </section>
  );
}
