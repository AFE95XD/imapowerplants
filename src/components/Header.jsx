import { useState, useEffect } from "react";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Soluciones", href: "#" },
  { name: "Areas", href: "#" },
  { name: "Contacto", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        {/* MENU NORMAL */}
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          {/* ESTE ES LA IMAGEN */}
          <div>
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto"
                src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_logo.png"
                alt="IMA_logo"
              />
            </a>
          </div>
          {/* ESTE ES EL NAV */}
          <div className="hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // className="text-base font-medium text-[#0000FF] hover:text-indigo-50"
                className={`${isMenuOpen ? navEstilos1 : navEstilos2}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* ESTE ES LA PARTE DEL TELEFONO */}
          <div>
            <p className={`${isMenuOpen ? navEstilos1 : navEstilos2}`}>
              Telefono
            </p>
          </div>
        </div>
        {/* PARTE DEL TELEFONBO */}
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
