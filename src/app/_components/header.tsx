"use client";

import { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="top"
      className="fixed top-0 left-0 w-full z-50 shadow-md bg-black text-white border-b border-white/30"
    >
      <div className="max-w-[1700px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#top" className="cursor-pointer">
          <h1 className="text-4xl font-medium">KAI CHU</h1>
        </Link>

        {/* Desktop: Navigational Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link
            href="#projects"
            className="transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            href="#work"
            className="transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button: shown only on small */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            <RiMenu3Fill
              size={28}
              className={`absolute transition-opacity duration-200 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <IoCloseSharp
              size={32}
              className={`absolute transition-opacity duration-200 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown: only when open */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/15">
          <nav className="flex flex-col px-6 py-4 space-y-6 text-lg">
            {["projects", "work", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="transition-colors duration-200 ease-in-out hover:text-blue-400"
                onClick={() => setIsOpen(false)} // auto‐close
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
