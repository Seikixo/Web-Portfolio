"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap justify-between items-center w-full px-4 md:px-28 py-4 bg-[#f6f6f6] border-b-4 border-black  transition-colors duration-300">
      <div className="text-xl font-headline md:text-2xl font-black text-black  uppercase italic">
        <Link href="/">IT FITZ</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-black  text-black hover:bg-[#fed01b] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-black ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
        ></span>
        <span
          className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-black my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-black ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
        ></span>
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.link ||
            (pathname.startsWith(link.link) && link.link !== "/");

          return (
            <Link
              className={
                isActive
                  ? `font-headline font-bold uppercase tracking-tighter text-black px-2 border-b-4 bg-[#fed01b]`
                  : `font-headline font-bold uppercase tracking-tighter text-black px-2  border-b-4 border-[#fed01b] transition-colors duration-100 hover:text-black`
              }
              href={link.link}
              key={link.label}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex md:hidden flex-col w-full mt-4 gap-4 pt-4 p-8 border-t-2 border-black animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.link ||
              (pathname.startsWith(link.link) && link.link !== "/");

            return (
              <Link
                className={
                  isActive
                    ? `font-headline font-bold uppercase tracking-tighter text-center text-black px-2 border-b-4 border-[#fed01b bg-[#fed01b]`
                    : `font-headline font-bold uppercase tracking-tighter text-center text-black px-2 transition-colors duration-100 hover:text-black`
                }
                href={link.link}
                key={link.label}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
