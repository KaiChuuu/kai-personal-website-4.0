"use client";

import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

// https://pixabay.com/illustrations/artistic-artwork-oil-painting-7481786/   Hero Bg

export default function Hero() {
  return (
    <section
      className="relative h-screen sm:min-h-[700px] flex items-center justify-start px-10 py-16 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/oil-painting-grayscaled.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl px-4 sm:px-8 md:max-w-4xl lg:pl-20 2xl:pl-60 2xl:max-w-6xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I&apos;m Kai Chu.
          <br />
          I&apos;m a{" "}
          <span className="text-blue-400">
            <Typewriter
              words={[
                "Fullstack Developer",
                "Software Engineer",
                "Game Dev Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={4500}
            />
          </span>
        </h1>

        <div className="mt-8 flex space-x-6 text-4xl">
          <a
            href="https://www.linkedin.com/in/kai-chu-b482541b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://github.com/kaichuuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://happyteam.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaItchIo className="hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
