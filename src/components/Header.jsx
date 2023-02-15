import { useState, useEffect } from "react";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuWhite, setMenuWhite] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      // console.log(scrollTop);
      if (scrollTop > 100) {
        // cambia 100 por el número de píxeles que desees
        setMenuOpen(true);
        setMenuWhite(true);
      } else {
        setMenuOpen(false);
        setMenuWhite(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`menu fixed top-0 left-0 right-0 z-50 p-4 ${
        isMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
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
                className="text-base font-medium text-[#0000FF] hover:text-indigo-50 before:"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* ESTE ES LA PARTE DEL TELEFONO */}
          <div>
            <p className="text-base font-medium text-[#0000FF] hover:text-indigo-50">
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
