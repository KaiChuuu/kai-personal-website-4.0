"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  icon: string;
};

export default function Certifications() {
  const [certs, setCerts] = useState<Certification[]>([]);

  useEffect(() => {
    fetch("/data/certifications.json")
      .then((res) => res.json())
      .then(setCerts)
      .catch(console.error);
  }, []);

  return (
    <section
      id="certifications"
      className="py-24 px-6 md:px-16 text-center bg-neutral-900 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Certifications</h2>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 2xl:gap-12 max-w-[1500px] mx-auto">
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 hover:bg-neutral-700 transition p-6 rounded-2xl shadow-lg text-left space-y-4 border border-neutral-700"
          >
            <div className="flex items-center gap-4">
              <Image
                src={cert.icon}
                alt={`${cert.issuer} logo`}
                width={100}
                height={100}
                className="rounded"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-1 text-white">
                  {cert.title}
                </h3>
                <p className="text-lg text-blue-400">{cert.issuer}</p>
                <p className="text-md text-gray-500">{cert.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
