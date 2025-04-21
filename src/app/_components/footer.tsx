import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-15 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="text-4xl font-medium mb-8 border-b">KAI CHU</p>
        <a
          href="mailto:kai.chu15@gmail.com"
          className="text-lg mb-4 hover:underline"
        >
          kai.chu15@gmail.com
        </a>
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/kai-chu-b482541b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/KaiChuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://happyteam.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-400 transition-colors"
          >
            <FaItchIo />
          </a>
        </div>
      </div>
    </footer>
  );
}
