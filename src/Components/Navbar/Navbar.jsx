export const Navbar = () => {
  return (
    <div className="flex flex-row bg-gray-200 justify-between h-20 items-center pl-[100px] pr-[100px]">
      <h1 className="flex flex-col font-bold text-lg">
        VENGE <br></br>
        <p className="italic text-sm font-light">Junior Developer</p>
      </h1>

      <ul className="flex flex-row gap-7 uppercase">
        <li className="cursor-pointer hover:border-b">Home</li>
        <li className="cursor-pointer hover:border-b">Skills</li>
        <li className="cursor-pointer hover:border-b">Education</li>
        <li className="cursor-pointer hover:border-b">Proyects</li>
      </ul>
      <button className="cursor-pointer border-purple-300 rounded-4xl p-2 bg-purple-400 font-bold text-white hover:bg-purple-500">
        CONTACT
      </button>
    </div>
  );
};
