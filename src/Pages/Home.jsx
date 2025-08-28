import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="w-full max-w-[800px] sm:max-w-[1200px] m-5 h-[300px] sm:h-[500px] bg-gray-200 bg-repeat bg-auto rounded-3xl sm:rounded-5xl flex items-center justify-center gap-30 p-20">
        {/* //Las targetas */}

        <div className="p-6 sm:p-10 rounded-xl border border-gray-300">
          <h1 className="text-xl sm:text-4xl font-bold">
            Hey, my name is{" "}
            <span className="text-purple-400 text-7xl">{"<Claudia>"}</span>
          </h1>
          <p className="text-md sm:text-2xl font-light mt-10">
            Junior developer focused on learning, building, and transforming
            ideas into digital experiences. Passionate about programming and new
            challenges. ♡
          </p>
        </div>

        <img
          src="/myPhoto.jpeg"
          alt="myPhoto"
          className="w-60 rounded-full"
        ></img>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <p>Check out my proyects</p>
        <ExpandMoreIcon className="text-purple-500"></ExpandMoreIcon>
      </div>
    </div>
  );
};
