import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Navbar } from "../Components/Navbar/Navbar";
import { AboutMe } from "./AboutMe/AboutMe";
import { Proyects } from "./Proyects";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center p-1 min-h-screen gap-30 mt-30 bg-gray-100">
        <div className="flex flex-col w-full max-w-[1200px] bg-white rounded-3xl sm:rounded-5xl items-center justify-center p-6 sm:p-15 text-gray-500 gap-6">
          {/* Card principal */}
          <div className="flex flex-col sm:flex-row justify-between items-center rounded-xl border border-gray-300 font-tasa w-full p-6 sm:p-10">
            {/* Tarjeta nombre */}
            <div className="flex-1">
              <h1 className="flex flex-col gap-4 font-bold text-center sm:text-left">
                Hey, my name is
                <span className="text-purple-300 text-5xl sm:text-7xl lobster-regular">
                  {"<Claudia>"}
                </span>
                <span className="text-xl sm:text-2xl font-extralight roboto-condensed">
                  Junior Frontend Developer
                </span>
              </h1>

              <p className="mt-6 sm:mt-10 text-center sm:text-left">
                Junior developer focused on learning, building,<br></br>
                and transforming ideas into digital experiences.
              </p>

              {/* Botón de contacto */}
              <div className="flex flex-col sm:flex-row gap-5 mt-6 sm:mt-10 items-center sm:justify-start">
                <a
                  href="#contact"
                  className="cursor-pointer text-gray-500 border-2 border-gray-300 rounded-lg p-2 font-bold hover:text-white  hover:bg-purple-500 hover:scale-110 roboto-condensed"
                >
                  CONTACT ME
                </a>

                <a
                  href="https://github.com/Venge-anz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-purple-500 transition"
                >
                  <FiGithub className=" w-6 h-6 text-purple-500 transform transition hover:scale-120 hover:rotate-8" />
                </a>

                <a
                  href="https://www.linkedin.com/in/claudia-vivo-rosa-97795b161/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className=" w-6 h-6 text-purple-500 transform transition hover:scale-120 hover:rotate-8" />
                </a>

                <a
                  href="https://www.linkedin.com/in/claudia-vivo-rosa-97795b161/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CgMail className=" w-6 h-6 text-purple-500 transform transition hover:scale-120 hover:rotate-8" />
                </a>
              </div>
            </div>

            {/* Tarjeta foto */}
            <div className="flex-shrink-0 rounded-2xl bg-purple-200">
              <img
                src="code.png"
                alt="myPhoto"
                className="border-purple-200 border-4 rounded-2xl sm:w-130 hover:rotate-8 transform transition-transform duration-900"
              />
            </div>
          </div>

          {/* Botón proyectos */}
          <div className="flex flex-col items-center cursor-pointer">
            <a
              href="#proyects"
              className="hover:text-purple-400 text-gray-400 font-medium"
            >
              Checkout my projects
            </a>
            <ExpandMoreIcon className="text-purple-500" />
          </div>
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="proyects">
          <Proyects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};
