import { FiGithub } from "react-icons/fi";

export const Proyects = () => {
  return (
    <div className="flex flex-row sm:flex-col items-center">
      {/* TITULO */}
      <div className="flex flex-col w-full max-w-[1200px] justify-center p-6 text-gray-700 gap-10">
        <h1 className="relative text-xl sm:text-4xl font-bold inline-block roboto-condensed ">
          Proyects
          <span className="absolute left-0 bottom-0 w-10 border-b-4 rounded-4xl border-purple-500"></span>
        </h1>
        <p>
          Here is a selection of projects I have worked on, showcasing my
          hands-on experience in development.
        </p>
        {/* PROYECTOS */}

        <div className="flex flex-col sm:flex-row gap-10">
          {/* PROYECTO 1 */}
          <div className="bg-white rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img
              src="/imagenProyecto.jpg"
              alt="proyecto1"
              className="rounded-t-xl"
            ></img>
            <div className="flex flex-col gap-3 p-5">
              <h1 className="text-xl sm:text-base font-bold ">
                Just Do It – Workout To-Do List
              </h1>
              <p className="roboto-condensed">
                A React-based web app for tracking and organizing workout
                routines, styled with Tailwind CSS, using JavaScript for
                interactive features and state management.
              </p>
              <div className="flex flex-row gap-3">
                <div className="bg-purple-200 rounded-full pr-2 pl-2">
                  React
                </div>
                <div className="bg-yellow-200 rounded-full pr-2 pl-2">
                  JavaScript
                </div>
                <div className="bg-green-200 rounded-full pr-2 pl-2">
                  Tailwind
                </div>
              </div>
              {/* Boton github */}
              <div>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/Venge-anz/Daily-gym")
                  }
                  className="flex flex-row items-center gap-2 cursor-pointer text-gray-800 border-2 border-gray-300 rounded-lg p-2 h-9 mt-10 font-bold hover:text-white  hover:bg-purple-500 hover:scale-110 roboto-condensed"
                >
                  <FiGithub></FiGithub>
                  Github
                </button>
              </div>
            </div>
          </div>

          {/* PROYECTO 2 */}

          <div className="bg-white rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img
              src="/imagenProyecto.jpg"
              alt="proyecto1"
              className="rounded-t-xl"
            ></img>
            <div className="flex flex-col gap-3 p-5">
              <h1 className="text-xl sm:text-base font-bold ">
                Animal Projector – Interactive Animal Viewer
              </h1>
              <p className="roboto-condensed">
                A React web app that displays animals using external APIs,
                styled with Tailwind CSS, with interactive features built in
                JavaScript.
              </p>
              <div className="flex flex-row gap-3">
                <div className="bg-purple-200 rounded-full pr-2 pl-2">
                  React
                </div>
                <div className="bg-yellow-200 rounded-full pr-2 pl-2">
                  JavaScript
                </div>
                <div className="bg-green-200 rounded-full pr-2 pl-2">
                  Tailwind
                </div>
              </div>
              {/* Boton github */}
              <div>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/Venge-anz/Protectora-React")
                  }
                  className="flex flex-row items-center gap-2 cursor-pointer text-gray-800 border-2 border-gray-300 rounded-lg p-2 h-9 mt-10 font-bold hover:text-white  hover:bg-purple-500 hover:scale-110 roboto-condensed"
                >
                  <FiGithub></FiGithub>
                  Github
                </button>
              </div>
            </div>
          </div>

          {/* PROYECTO 3 */}
          <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-row gap-1 items-center">
              <p className="text-xl sm:text-base font-bold">PROYECTO 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
