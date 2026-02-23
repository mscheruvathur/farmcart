import caringLogo from '../assets/feature-caring.png';
import freshLogo from '../assets/feature-fresh.png';
import qualityLogo from '../assets/feature-quality.png';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#efefef]" aria-label="About Farmcart">
      <div className="flex flex-col items-center justify-evenly gap-6 px-4 py-8 sm:flex-row sm:flex-wrap sm:gap-8 md:px-12 md:py-10 lg:gap-12">
        <article className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <img src={qualityLogo} alt="Quality certified" className="h-[80px] w-[86px] sm:h-[100px] sm:w-[106px] md:h-[114px] md:w-[120px]" loading="lazy" />
          <p className="max-w-[130px] text-[18px] font-medium leading-[1.1] text-[#1e1f23] sm:text-[20px] md:text-[22px] md:leading-[1.05]">Quality certified</p>
        </article>

        <article className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <img src={freshLogo} alt="Fresh to door" className="h-[86px] w-[86px] sm:h-[106px] sm:w-[106px] md:h-[120px] md:w-[120px]" loading="lazy" />
          <p className="max-w-[130px] text-[18px] font-medium leading-[1.1] text-[#1e1f23] sm:text-[20px] md:text-[22px] md:leading-[1.05]">Fresh to Door</p>
        </article>

        <article className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <img src={caringLogo} alt="Caring for years" className="h-[80px] w-[86px] sm:h-[96px] sm:w-[106px] md:h-[110px] md:w-[120px]" loading="lazy" />
          <p className="max-w-[145px] text-[18px] font-medium leading-[1.1] text-[#1e1f23] sm:text-[20px] md:text-[22px] md:leading-[1.05]">Caring for Years</p>
        </article>
      </div>
    </section>
  );
}
