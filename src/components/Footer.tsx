export function Footer() {
  return (
    <footer className="bg-[#039448] px-4 py-6 sm:px-6 md:px-8 md:py-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 text-center text-[12px] font-medium text-white sm:text-[13px] md:flex-row md:items-center md:text-left md:text-[14px]">
        <p>Dubai Abu Dhabi Sharjah Ajman</p>
        <p id="contact">© {new Date().getFullYear()}farmcart-All rights reserved</p>
      </div>
    </footer>
  );
}
