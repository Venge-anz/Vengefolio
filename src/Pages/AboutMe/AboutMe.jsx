import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Profile } from "./Profile";

export const AboutMe = () => {
  return (
    <div className="flex flex-row sm:flex-col items-center">
      {/* TITULO */}
      <div className="flex flex-col w-full max-w-[1200px] justify-center p-6 text-gray-700 gap-10">
        <h1 className="relative text-xl sm:text-3xl font-bold inline-block rubik  ">
          About Me
          <span className="absolute left-0 bottom-0 w-10 border-b-4 rounded-4xl border-purple-500"></span>
        </h1>

        {/* BIO */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center">
          {/* //PROFILE */}
          <Profile></Profile>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-1 ">
              <FeedOutlinedIcon className="text-purple-400"></FeedOutlinedIcon>
              <h1 className="text-xl sm:text-1xl font-bold">Bio</h1>
            </div>
            <p>
              For years I dreamed of dedicating myself to programming, but I
              didn’t dare take the leap. One day I did: I quit my job and
              started this journey. Today, I’m proud of what I´ve learned and
              excited to share my projects.
            </p>

            {/* Targetas educacion y experiencia */}
            <div className="flex flex-col sm:flex-row gap-15 ">
              {/* Education */}
              <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2  hover:shadow-2xl duration-300">
                <div className="flex flex-row gap-1 items-center">
                  <SchoolOutlinedIcon className="text-purple-400"></SchoolOutlinedIcon>
                  <p className="text-xl sm:text-base font-bold">Education</p>
                </div>
                <div>
                  <ul className="list-none text-gray-700 max-w-[800px] mx-auto mt-6 space-y-2 text-sm">
                    <li className="font-bold">
                      Web Programming
                      <span> (2024 - Present)</span>
                    </li>
                    <li>
                      Higher Education in Administration and Finance -
                      (2016-2017)
                    </li>
                    <li>Administrative Management (2013-2014)</li>
                  </ul>
                </div>
              </div>
              {/* Experience */}
              <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
                <div className="flex flex-row gap-1 items-center">
                  <WorkOutlineOutlinedIcon className="text-purple-400"></WorkOutlineOutlinedIcon>
                  <p className="text-xl sm:text-base font-bold">Experience</p>
                </div>
                <div>
                  <ul className="list-none text-gray-700 max-w-[800px] mx-auto mt-6 space-y-2 text-sm">
                    <li>
                      Laundry Technician – Lavatech Producción (2021 – Oct 2024)
                    </li>
                    <li>
                      Waitress / Bartender – Various Restaurants (2019 – 2021)
                    </li>
                    <li>Administrative Assistant – Ganasalud (2018 – 2019)</li>
                    <li>
                      Administrative Assistant – Electrostocks (2017 – 2018)
                    </li>
                    <li>
                      Receptionist – Ayuntamiento de San Vicente (2013 – 2014)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
