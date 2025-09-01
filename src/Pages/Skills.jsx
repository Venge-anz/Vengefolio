import { BsTools } from "react-icons/bs";
import { IoCodeSharp } from "react-icons/io5";
import { BsWindowFullscreen } from "react-icons/bs";

export const Skills = () => {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="w-full max-w-[1200px] text-gray-700 flex flex-col gap-10">
        {/* TITULO */}
        <div className="flex flex-col gap-4">
          <h1 className="relative text-xl sm:text-3xl font-bold inline-block">
            Skills
            <span className="absolute left-0 bottom-0 w-10 border-b-4 rounded-full border-purple-500"></span>
          </h1>
          <p>
            As a junior developer, I've gained experience with various tools and
            frameworks in web development, especially on the frontend.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* PROGRAMMING LANGUAGES */}
          <div className="bg-white rounded-xl border border-gray-300 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-6 p-5">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <IoCodeSharp className="bg-purple-200 text-purple-600 rounded w-6 h-6 p-1 transform transition hover:scale-110 hover:rotate-6" />
                Programming Languages
              </h2>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  HTML/CSS
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          {/* FRONTEND DEVELOPMENT */}
          <div className="bg-white rounded-xl border border-gray-300 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-6 p-5">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <BsWindowFullscreen className="bg-purple-200 text-purple-600 rounded w-6 h-6 p-1 transform transition hover:scale-110 hover:rotate-6" />
                Frontend Development
              </h2>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  React
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  Bootstrap
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  Rest APIs
                </span>
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg-white rounded-xl border border-gray-300 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-6 p-5">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <BsTools className="bg-purple-200 text-purple-600 rounded w-6 h-6 p-1 transform transition hover:scale-110 hover:rotate-6" />
                Tools
              </h2>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
