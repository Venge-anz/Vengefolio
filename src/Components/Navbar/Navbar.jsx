export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-6 sm:px-10">
        {/* Logo / Nombre */}
        <h1 className="flex flex-col font-bold text-lg">
          VENGE
          <span className="italic text-sm font-light">Junior Developer</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex flex-row gap-7 uppercase items-center">
          <a
            href="#home"
            className="cursor-pointer hover:border-b-2 border-purple-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:border-b-2 border-purple-400"
          >
            About
          </a>
          <a
            href="#proyects"
            className="cursor-pointer hover:border-b-2 border-purple-400"
          >
            Proyects
          </a>
          <a
            href="#skills"
            className="cursor-pointer hover:border-b-2 border-purple-400"
          >
            Skills
          </a>

          {/* Botón de contacto */}
          <button
            onClick={() =>
              (window.location.href = "mailto:vengedev14@gmail.com")
            }
            className="cursor-pointer border-purple-300 rounded-lg p-2 bg-purple-400 font-bold text-white hover:bg-purple-500 roboto-condensed"
          >
            RESUME
          </button>
        </div>
      </div>
    </nav>
  );
};
