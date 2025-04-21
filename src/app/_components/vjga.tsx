import Image from "next/image";

export default function VJGA() {
  return (
    <section
      id="vjga"
      className="py-24 px-6 md:px-16 text-center text-white relative overflow-hidden"
    >
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-[url('/images/nikkei-center.jpg')] bg-cover bg-center opacity-30 z-0"
        style={{ filter: "grayscale(50%)" }}
      />

      {/* Overlay: green + dark tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0a]/30 via-[#1c2b1c]/40 to-[#0a0f0a]/30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="relative w-32 h-32">
          <Image
            src="/images/vjga-logo.png"
            alt="VJGA Logo"
            fill
            className="object-contain rounded shadow-md"
            priority
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-green-300">
          Supporting VJGA
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl text-gray-200">
          For over 4 years,
          <br />
          I’ve had the privilege of supporting the nonprofit{" "}
          <strong className="text-red-300">
            Vancouver Japanese Gardeners Association
          </strong>{" "}
          by designing and maintaining their website. It&apos;s been a
          meaningful way to give back to a community I care deeply about, and to
          help preserve and share the craft of Japanese gardening in Vancouver.
          <br />
          <br />
          If you have the chance, please take a look at the work we’ve created!
        </p>

        <a
          href="https://www.vanjapangardeners.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 border border-green-400 text-green-300 hover:bg-green-700 hover:text-white rounded transition-colors duration-200"
        >
          Visit VJGA Website
        </a>
      </div>
    </section>
  );
}
