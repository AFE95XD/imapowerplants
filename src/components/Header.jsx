import { useState, useEffect } from "react";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header className={`bg-transparent z-50 w-full ${small ? "small" : ""}`}>
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
