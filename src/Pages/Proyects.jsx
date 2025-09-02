import { FiGithub } from "react-icons/fi";

export const Proyects = () => {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="w-full max-w-[1200px] text-gray-700 flex flex-col gap-10">
        {/* TITULO */}
        <div className="flex flex-col gap-4">
          <h1 className="relative text-xl sm:text-3xl font-bold inline-block rubik">
            Projects
            <span className="absolute left-0 bottom-0 w-10 border-b-4 rounded-full border-purple-500"></span>
          </h1>
          <p>
            Here is a selection of projects I have worked on, showcasing my
            hands-on experience in development.
          </p>
        </div>

        {/* PROYECTOS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* PROYECTO 1 */}
          <div className="bg-white rounded-xl border border-gray-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img src="/proyect1.png" alt="proyecto1" className="rounded-t-xl" />
            <div className="flex flex-col justify-between flex-1 gap-3 p-5">
              <div>
                <h2 className="text-xl font-bold">
                  Just Do It – Workout To-Do List
                </h2>
                <p className="roboto-condensed">
                  A React-based web app for tracking and organizing workout
                  routines, styled with Tailwind CSS, using JavaScript for
                  interactive features and state management.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-purple-200 rounded-full px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="bg-yellow-200 rounded-full px-3 py-1 text-sm">
                    JavaScript
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm">
                    Tailwind
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/Venge-anz/Daily-gym",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="flex items-center gap-2 cursor-pointer text-gray-800 border-2 border-gray-300 rounded-lg px-3 py-2 font-bold hover:text-white hover:bg-purple-500 hover:scale-110 transition"
                >
                  <FiGithub /> Github
                </button>
              </div>
            </div>
          </div>

          {/* PROYECTO 2 */}
          <div className="bg-white rounded-xl border border-gray-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img src="/proyect2.png" alt="proyecto2" className="rounded-t-xl" />
            <div className="flex flex-col justify-between flex-1 gap-3 p-5">
              <div>
                <h2 className="text-xl font-bold">
                  Animal Projector – Interactive Animal Viewer
                </h2>
                <p className="roboto-condensed">
                  A React web app that displays animals using external APIs,
                  styled with Tailwind CSS, with interactive features built in
                  JavaScript.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-purple-200 rounded-full px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="bg-yellow-200 rounded-full px-3 py-1 text-sm">
                    JavaScript
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm">
                    Tailwind
                  </span>
                  <span className="bg-orange-200 rounded-full px-3 py-1 text-sm">
                    Rest API's
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/Venge-anz/Protectora-React",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="flex items-center gap-2 cursor-pointer text-gray-800 border-2 border-gray-300 rounded-lg px-3 py-2 font-bold hover:text-white hover:bg-purple-500 hover:scale-110 transition"
                >
                  <FiGithub /> Github
                </button>
              </div>
            </div>
          </div>

          {/* PROYECTO 3 */}
          <div className="bg-white rounded-xl border border-gray-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img
              src="/proyect3.jpeg"
              alt="proyecto3"
              className="rounded-t-xl"
            />
            <div className="flex flex-col justify-between flex-1 gap-3 p-5">
              <div>
                <h2 className="text-xl font-bold">React Shop – Online Store</h2>
                <p className="roboto-condensed">
                  A React web app that functions as an online store, built with
                  React, JavaScript, and CSS, featuring product listings,
                  category filters, and an interactive shopping experience.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-purple-200 rounded-full px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="bg-yellow-200 rounded-full px-3 py-1 text-sm">
                    JavaScript
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm">
                    CSS
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/Venge-anz/Tienda-y-carrito-con-REACT",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="flex items-center gap-2 cursor-pointer text-gray-800 border-2 border-gray-300 rounded-lg px-3 py-2 font-bold hover:text-white hover:bg-purple-500 hover:scale-110 transition"
                >
                  <FiGithub /> Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
