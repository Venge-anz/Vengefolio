import { FiGithub } from 'react-icons/fi';

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
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* PROYECTO 1 */}
          <div className="bg-white rounded-xl border border-gray-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img src="/Lynve.png" alt="proyecto1" className="rounded-t-xl" />
            <div className="flex flex-col justify-between flex-1 gap-3 p-5">
              <div>
                <h2 className="text-xl font-bold">Lynve – Music school</h2>
                <p className="roboto-condensed">
                  Full-stack application with a React (Vite) frontend and
                  Node.js/Express backend, featuring JWT authentication, REST
                  API communication via Axios, schema validation with Zod, file
                  uploads using multer, email services with Nodemailer, and
                  MySQL database integration."
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-purple-200 rounded-full px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="bg-yellow-200 rounded-full px-3 py-1 text-sm">
                    JavaScript
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm">
                    Bootstrap
                  </span>
                  <span className="bg-blue-200 rounded-full px-3 py-1 text-sm">
                    Node.js
                  </span>
                  <span className="bg-pink-200 rounded-full px-3 py-1 text-sm">
                    Express
                  </span>
                  <span className="bg-indigo-200 rounded-full px-3 py-1 text-sm">
                    MySQL
                  </span>
                  <span className="bg-red-200 rounded-full px-3 py-1 text-sm">
                    JWT
                  </span>
                  <span className="bg-orange-200 rounded-full px-3 py-1 text-sm">
                    bcrypt
                  </span>
                  <span className="bg-teal-200 rounded-full px-3 py-1 text-sm">
                    multer
                  </span>
                  <span className="bg-lime-200 rounded-full px-3 py-1 text-sm">
                    Nodemailer
                  </span>
                  <span className="bg-cyan-200 rounded-full px-3 py-1 text-sm">
                    Axios
                  </span>
                  <span className="bg-fuchsia-200 rounded-full px-3 py-1 text-sm">
                    Zod
                  </span>
                  <span className="bg-amber-200 rounded-full px-3 py-1 text-sm">
                    React Router
                  </span>
                  <span className="bg-emerald-200 rounded-full px-3 py-1 text-sm">
                    Vite
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() =>
                    window.open(
                      'https://github.com/Venge-anz/LynveMusicSchool.git',
                      '_blank',
                      'noopener,noreferrer',
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
            <div className="h-93 overflow-hidden rounded-t-xl">
              <img
                src="/MoviesApp.png"
                alt=""
                className="w-full h-full object-cover object-[center_50%]"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 gap-3 p-5">
              <div>
                <h2 className="text-xl font-bold">
                  Movies app – Film Registry
                </h2>
                <p className="roboto-condensed">
                  A server-rendered web application using Node.js and Express
                  with EJS templating, built to practice and strengthen core
                  backend concepts, featuring secure authentication (bcrypt),
                  file uploads (multer), and MySQL-based data management.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-purple-200 rounded-full px-3 py-1 text-sm">
                    Express
                  </span>
                  <span className="bg-orange-200 rounded-full px-3 py-1 text-sm">
                    Ejs
                  </span>
                  <span className="bg-yellow-200 rounded-full px-3 py-1 text-sm">
                    MySQL
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm">
                    Bootstrap
                  </span>
                  <span className="bg-orange-200 rounded-full px-3 py-1 text-sm">
                    Bcrypt
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm">
                    Multer
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() =>
                    window.open(
                      'https://github.com/Venge-anz/Movies_app.git',
                      '_blank',
                      'noopener,noreferrer',
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
          {/* <div className="bg-white rounded-xl border border-gray-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
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
                      'https://github.com/Venge-anz/Tienda-y-carrito-con-REACT',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                  className="flex items-center gap-2 cursor-pointer text-gray-800 border-2 border-gray-300 rounded-lg px-3 py-2 font-bold hover:text-white hover:bg-purple-500 hover:scale-110 transition"
                >
                  <FiGithub /> Github
                </button>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
