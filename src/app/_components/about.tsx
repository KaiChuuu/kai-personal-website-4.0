"use client";

import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-neutral-900 text-black dark:text-white py-32 px-6 md:px-16 min-h-[750px] flex items-center justify-center"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10 xl:gap-20 h-full">
        {/* Profile image */}
        <div className="w-72 relative overflow-hidden shadow-lg border-4 border-white-400">
          <img
            src="/images/kai-image.jpg"
            alt="Profile photo"
            width={480}
            height={600}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Hi! I&apos;m Kai, a passionate software developer with a love for
            learning new tech stacks, sharpening my skills, and building
            projects that push my creativity. I&apos;m always excited to explore
            new challenges and bring ideas to life through code.
            <br />
            Feel free to check out my work — thanks for stopping by!
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Reach out to me at:{" "}
            <a
              href="mailto:kai.chu15@gmail.com"
              className="text-blue-400 hover:underline"
            >
              kai.chu15@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-4xl mt-4">
            <a
              href="https://www.linkedin.com/in/kai-chu-b482541b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/kaichuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://happyteam.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaItchIo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
