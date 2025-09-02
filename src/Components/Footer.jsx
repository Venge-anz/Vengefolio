import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

export const Footer = () => {
  return (
    <div>
      <footer className=" w-full bg-gray-700 border-t border-gray-200 shadow-ls md:flex md:items-center md:justify-between p-8 px-10 sm:px-40 ">
        <span className="text-sm text-gray-400 sm:text-center ">
          <h1 className="flex flex-col font-bold text-lg">VENGEDEV</h1>
        </span>
        <div className="flex flex-col justify-center items-end gap-1">
          <div className="flex flex-row gap-5">
            <a
              href="https://github.com/Venge-anz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 "
            >
              <FiGithub className=" w-5 h-5 text-gray-400 " />
            </a>

            <a
              href="https://www.linkedin.com/in/claudia-vivo-rosa-97795b161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className=" w-5 h-5 text-gray-400 " />
            </a>

            <a
              href="https://www.linkedin.com/in/claudia-vivo-rosa-97795b161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgMail className=" w-5 h-5 text-gray-400 " />
            </a>
          </div>
          <div>
            <p className="text-gray-400">
              © 2025 Claudia Vivo | Built with React and Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
