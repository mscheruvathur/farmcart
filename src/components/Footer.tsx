import farmcartLogo from '../assets/FARMCART-LOGO.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          <img src={farmcartLogo} alt="Farmcart" className="h-auto w-[182px]" loading="lazy" />

          <div className="flex items-center gap-3 text-primary">
            <a href="#" aria-label="Facebook" className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[12px] font-bold">f</a>
            <a href="#" aria-label="Instagram" className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold">ig</a>
            <a href="#" aria-label="YouTube" className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold">▶</a>
            <a href="#" aria-label="WhatsApp" className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold">w</a>
            <a href="#main-content" aria-label="Back to top" className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent text-accent text-[12px] font-bold">↑</a>
          </div>
        </div>

        <div className="mt-5 border-t border-white/35 pt-3 text-center text-[11px] text-white sm:text-[12px]">
          ©{new Date().getFullYear()}@Farmcart-All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
