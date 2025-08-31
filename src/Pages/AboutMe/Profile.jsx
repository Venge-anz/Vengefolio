import { IoDownloadOutline } from "react-icons/io5";

export const Profile = () => {
  return (
    <div className="flex flex-col w-70 sm:w-70">
      <div className="bg-white p-3 sm:p-1 rounded-2xl border border-gray-300 transform transition hover:-translate-y-2  hover:shadow-2xl duration-300 relative">
        <div className="flex flex-row items-start p-1 gap-2 ml-2">
          <button className="bg-purple-400 w-4 h-4 rounded-full transition hover:scale-120"></button>
          <button className="bg-yellow-400 w-4 h-4 rounded-full transition hover:scale-120"></button>
          <button className="bg-green-600 w-4 h-4 rounded-full transition hover:scale-120"></button>
        </div>
        <div className="absolute left-0 right-0 border-t-2 border-gray-300 w-full mt-1"></div>
        <div>
          <img
            src="/me2.jpeg"
            alt="mePhoto"
            className="w-142 border-2 border-gray-300 rounded-2xl mt-3"
          ></img>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <h1 className="text-xl sm:text-2xl font-bold">Claudia Vivo</h1>
        <p className="text-gray-500">Junior Developer</p>
      </div>
      {/* //Skilss */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2 font-semibold text-sm">
          <div className="bg-purple-200 rounded-full pr-2 pl-2">React</div>
          <div className="bg-yellow-200 rounded-full pr-2 pl-2">JavaScript</div>
          <div className="bg-green-200 rounded-full pr-2 pl-2">CSS</div>
        </div>
        <button
          onClick={() => (window.location.href = "mailto:vengedev14@gmail.com")}
          className="flex flex-row justify-center gap-2 items-center cursor-pointer border-purple-300 rounded-lg p-2 bg-purple-400 font-bold text-white hover:bg-purple-500 roboto-condensed"
        >
          <IoDownloadOutline></IoDownloadOutline>
          Download Resume
        </button>
      </div>
    </div>
  );
};
