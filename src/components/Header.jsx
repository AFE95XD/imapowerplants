import { PhoneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Inicio", href: "#sec0" },
  { name: "Soluciones", href: "#sec1" },
  { name: "Areas", href: "#sec2" },
  { name: "Contacto", href: "#sec3" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Clases tailwind
  const navEstilos1 = "font-roboto text-base font-bold text-[#0000FF]";
  const navEstilos2 = "font-roboto text-base font-bold text-white";
  useEffect(() => {
    // Funcion Flecha
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // console.log(scrollTop);
      if (scrollTop > 100) {
        // cambia 100 por el número de píxeles que desees
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isMenuOpen
          ? "fixed bg-white shadow-lg w-full z-50 text-white"
          : "absolute bg-transparent w-full z-50 border-b-2 border-[#ffffff38]"
      } transition duration-500 ease-in-out`}
    >
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-6 px-5">
        {/* ::Site logo and Name */}
        <a
          href="/"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <span className="sr-only">Your Company</span>
          <img
            className="h-11 w-auto"
            // src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_logo.png"
            src={
              isMenuOpen
                ? "src/assets/img/IMA_logo.png"
                : "src/assets/img/IMA_blanco.png"
            }
            alt="IMA_logo"
          />
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // className="text-base font-medium text-[#0000FF] hover:text-indigo-50"
              className={`mr-8 ${
                isMenuOpen ? navEstilos1 : navEstilos2
              } relative after:absolute ${
                isMenuOpen ? "after:bg-[#0000ff]" : "after:bg-gray-200"
              } after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* ::Telefono */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <div>
            <p
              className={`${
                isMenuOpen ? navEstilos1 : navEstilos2
              } flex items-center content-center`}
            >
              <span className="w-6 h-6">{<PhoneIcon />}</span>
              <span className="pl-3">(+52 1) 55-3717-1132</span>
            </p>
          </div>
        </div>
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0000FF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-[#0000ff7c] hover:to-[#0000FF7c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
          {navigation.map((link) => (
            <a
              href={link.href}
              className={`block px-3 py-2 rounded-md hover:text-white hover:bg-[#0000FF] ${
                isMenuOpen ? navEstilos1 : navEstilos1
              }`}
              key={link.name}
            >
              {link.name}
            </a>
          ))}
          <p className="px-3 py-2 rounded-md text-white bg-[#0000FF] mt-5 flex items-center justify-center text-center">
            <span className="w-8 h-8">{<PhoneIcon />}</span>
            <span className="pl-3">(+52 1) 55-3717-1132</span>
          </p>
        </div>
      )}
    </header>
    // <header
    //   className={`${
    //     isMenuOpen
    //       ? "fixed bg-white shadow-lg w-full z-50 text-white"
    //       : "absolute bg-transparent w-full z-50 border-b-2 border-[#ffffff38]"
    //   } transition duration-500 ease-in-out`}
    // >
    //   <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
    //     {/* MENU NORMAL */}
    //     <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
    //       {/* ESTE ES LA IMAGEN */}
    //       <div>
    //         <a href="#">
    //           <span className="sr-only">Your Company</span>
    //           <img
    //             className="h-10 w-auto"
    //             src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_logo.png"
    //             alt="IMA_logo"
    //           />
    //         </a>
    //       </div>
    //       {/* ESTE ES EL NAV */}
    //       <div className="hidden space-x-8 lg:block">
    //         {navigation.map((link) => (
    //           <a
    //             key={link.name}
    //             href={link.href}
    //             // className="text-base font-medium text-[#0000FF] hover:text-indigo-50"
    //             className={`${isMenuOpen ? navEstilos1 : navEstilos2}`}
    //           >
    //             {link.name}
    //           </a>
    //         ))}
    //       </div>
    //       {/* ESTE ES LA PARTE DEL TELEFONO */}
    //       <div>
    //         <p className={`${isMenuOpen ? navEstilos1 : navEstilos2}`}>
    //           Telefono
    //         </p>
    //       </div>
    //     </div>
    //     {/* PARTE DEL TELEFONBO */}
    //     <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
    //       {navigation.map((link) => (
    //         <a
    //           key={link.name}
    //           href={link.href}
    //           className="text-base font-medium text-white hover:text-indigo-50"
    //         >
    //           {link.name}
    //         </a>
    //       ))}
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Header;
