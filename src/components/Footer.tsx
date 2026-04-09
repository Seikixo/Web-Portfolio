import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 bg-[#fed01b] text-black border-t-4 border-black mt-auto">
      <div className="font-black text-xl md:text-lg font-headline text-center md:text-left">
        IT FITZ
      </div>
      <div className="font-body font-medium uppercase text-xs sm:text-sm tracking-widest text-center">
        ©2026 IT FITZ. ALL RIGHTS RESERVED.
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        <Link
          className="font-body font-medium uppercase text-xs sm:text-sm tracking-widest no-underline hover:skew-x-2 transition-transform hover:scale-105"
          href="https://github.com/Seikixo"
        >
          GITHUB
        </Link>
        <Link
          className="font-body font-medium uppercase text-xs sm:text-sm tracking-widest no-underline hover:skew-x-2 transition-transform hover:scale-105"
          href="https://www.linkedin.com/in/vaughn-fitz/"
        >
          LINKEDIN
        </Link>
        <Link
          className="font-body font-medium uppercase text-xs sm:text-sm tracking-widest no-underline hover:skew-x-2 transition-transform hover:scale-105"
          href="mailto:vaughnfitz27@gmail.com"
        >
          EMAIL
        </Link>
      </div>
    </footer>
  );
}
