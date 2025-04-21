"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// https://pixabay.com/illustrations/painting-river-mountains-nature-7524693/   Mountain Bg

type Job = {
  company: string;
  duration: string;
  role: string;
  description: string;
  icon: string;
};

export default function Work() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/data/workData.json")
      .then((res) => res.json())
      .then(setJobs)
      .catch((err) => console.error("Error loading work data:", err));
  }, []);

  return (
    <section
      id="work"
      className="relative bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white py-32 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/mountain-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-10 xl:gap-15 bg-neutral-800/90 p-6 shadow-md"
            >
              {/* Icon */}
              <div className="w-full lg:w-50 h-50 bg-white flex items-center justify-center rounded-md shadow-md shrink-0">
                <div className="relative w-40 h-40 sm:w-50 sm:h-50 lg:w-40 lg:h-40">
                  <Image
                    src={job.icon}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold">{job.company}</h3>
                <p className="text-lg text-blue-400 font-medium mb-1">
                  {job.role}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">
                  {job.duration}
                </p>
                <p className="text-lg sm:text-xl leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
