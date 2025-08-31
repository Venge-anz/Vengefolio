import { FaCode } from "react-icons/fa6";
import { IoCodeSharp } from "react-icons/io5";
import { BsWindowFullscreen } from "react-icons/bs";

export const Skills = () => {
  return (
    <div className=" flex flex-row sm:flex-col items-center">
      {/* TITULO */}
      <div className="flex flex-col w-full max-w-[1200px] justify-center p-6 text-gray-700 gap-10">
        <h1 className="relative text-xl sm:text-4xl font-bold inline-block roboto-condensed ">
          Skills
          <span className="absolute left-0 bottom-0 w-10 border-b-4 rounded-4xl border-purple-500"></span>
        </h1>
        <p>
          As a junior developer, I've gained experience with various tools and
          frameworks in web development, especially on the frontend.
        </p>
        {/* SKILLS */}

        <div className="grid flex-col sm:grid-cols-3 gap-10">
          {/* PROGRAMING LENGUAGES 1 */}
          <div className="bg-white rounded-xl border border-gray-300 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-7 p-5">
              <h1 className="flex items-center gap-2 text-xl sm:text-base font-bold ">
                <IoCodeSharp className="bg-purple-200 text-purple-600 rounded w-6 h-6 p-1 transform transition hover:scale-120 hover:rotate-8"></IoCodeSharp>
                Programming Languages
              </h1>
              <div className="flex flex-row gap-3">
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  HTML/CSS
                </div>
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  JavaScript
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-7 p-5">
              <h1 className="flex items-center gap-2 text-xl sm:text-base font-bold ">
                <BsWindowFullscreen className="bg-purple-200 text-purple-600 rounded w-6 h-6 p-1 transform transition hover:scale-120 hover:rotate-8"></BsWindowFullscreen>
                Frontend Development
              </h1>
              <div className="flex flex-row gap-3">
                <div className="bg-gray-200 rounded-full pr-2 pl-2">React</div>
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  Tailwind CSS
                </div>
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-7 p-5">
              <h1 className="flex items-center gap-2 text-xl sm:text-base font-bold ">
                <FaCode className="bg-purple-200 text-purple-600 rounded w-6 h-6 p-1 transform transition hover:scale-120 hover:rotate-8"></FaCode>
                Backend Development
              </h1>
              <div className="flex flex-row gap-3">
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  Node.js
                </div>
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  Rest APIs
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-7 p-5">
              <h1 className="text-xl sm:text-base font-bold ">Databases</h1>
              <div className="flex flex-row gap-3">
                <div className="bg-gray-200 rounded-full pr-2 pl-2">
                  Firebase
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-7 p-5">
              <h1 className="text-xl sm:text-base font-bold ">Tools</h1>
              <div className="flex flex-row gap-3">
                <div className="bg-gray-200 rounded-full pr-2 pl-2">Git</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
