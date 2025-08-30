import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export const AboutMe = () => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] m-5 items-start justify-center p-6 sm:p-20 text-gray-700 gap-10">
      {/* TITULO */}
      <h1 className="relative text-xl sm:text-4xl font-bold inline-block roboto-condensed ">
        About Me
        <span className="absolute left-0 bottom-0 w-15 border-b-4 rounded-4xl border-purple-500"></span>
      </h1>

      {/* BIO */}
      <div className="flex flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 ">
            <FeedOutlinedIcon className="text-purple-400"></FeedOutlinedIcon>
            <h1 className="text-xl sm:text-1xl font-bold">Bio</h1>
          </div>
          <p>
            For years I dreamed of dedicating myself to programming, but I
            didn’t dare take the leap. One day I did: I quit my job and started
            this journey. Today, I’m proud of what I´ve learned and excited to
            share my projects.
          </p>
        </div>
        <p className="border ">HOLAAAAAA</p>
      </div>

      {/* Targetas educacion y experiencia */}
      <div className="flex flex-col sm:flex-row gap-8 ">
        {/* Education */}
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 shadow-lg hover:shadow-2xl duration-300">
          <div className="flex flex-row gap-1 items-center">
            <SchoolOutlinedIcon className="text-purple-400"></SchoolOutlinedIcon>
            <p className="text-xl sm:text-base font-bold">Education</p>
          </div>
          <div>
            <ul className="list-none text-gray-700 max-w-[800px] mx-auto mt-6 space-y-2">
              <li>Web Programming (2024 - Present)</li>
              <li>
                Higher Education in Administration and Finance - (2016-2017)
              </li>
              <li>Administrative Management (2013-2014)</li>
            </ul>
          </div>
        </div>
        {/* Experience */}
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-300 flex-1 transform transition hover:-translate-y-2 shadow-lg hover:shadow-2xl duration-300">
          <div className="flex flex-row gap-1 items-center">
            <WorkOutlineOutlinedIcon className="text-purple-400"></WorkOutlineOutlinedIcon>
            <p className="text-xl sm:text-base font-bold">Experience</p>
          </div>
          <div>
            <ul className="list-none text-gray-700 max-w-[800px] mx-auto mt-6 space-y-2">
              <li>
                Laundry Technician – Lavatech Producción (2021 – Oct 2024)
              </li>
              <li>Waitress / Bartender – Various Restaurants (2019 – 2021)</li>
              <li>Administrative Assistant – Ganasalud (2018 – 2019)</li>
              <li>Administrative Assistant – Electrostocks (2017 – 2018)</li>
              <li>Receptionist – Ayuntamiento de San Vicente (2013 – 2014)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row justify-center gap-6 mr-30 ml-30 mt-20 roboto-condensed"> */}
      {/* Hard Skills */}
      {/* <div className="bg-gray-200 p-6 sm:p-10 rounded-xl border border-gray-300 flex-1">
          <h2 className="text-center text-xl sm:text-2xl font-bold border-b-2 border-purple-400 pb-2 mb-4">
            HARD SKILLS
          </h2> */}
      {/* <ul className="text-md sm:text-lg font-light list-disc list-inside space-y-2">
            <li>React.js (Hooks)</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>REST API consumption</li>
            <li>Basic Firebase</li>
            <li>Git/GitHub</li>
            <li>Deployment in Netlify</li>
          </ul> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};
