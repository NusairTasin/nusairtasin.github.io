import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const menuItems = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];
const linkItems = [
  {
    logo: <BsYoutube />,
    path: "https://youtube.com",
    color: "hover:text-red-500",
  },
  {
    logo: <BsLinkedin />,
    path: "https://linkedin.com/in/nusair-tasin",
    color: "hover:text-blue-500",
  },
  {
    logo: <BsGithub />,
    path: "https://github.com/NusairTasin",
    color: "hover:text-orange-500",
  },
  {
    logo: <BsTwitterX />,
    path: "https://twitter.com",
    color: "hover:text-white",
  },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="text-white fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-[#00091d]/50 sm:px-16 px-12 py-5 backdrop-blur-md md:justify-evenly">
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent opacity-90 hover:opacity-100 text-xl sm:text-2xl font-semibold transition-all duration-300"
        >
          Nusair Tasin
        </a>

        <ul className="hidden md:flex gap-10">
          {menuItems.map((link, index) => (
            <a
              className="opacity-70 tranistion-all duration-300 hover:opacity-100"
              key={index}
              href={link.path}
            >
              <li>{link.title}</li>
            </a>
          ))}
        </ul>

        <ul className="hidden md:flex gap-5">
          {linkItems.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 ${link.color}`}
            >
              <a href={link.path} target="_blank">{link.logo}</a>
            </li>
          ))}
        </ul>

        {isOpen ? (
          <BiX
            onClick={menuOpen}
            className="cursor-pointer md:hidden block text-4xl"
          />
        ) : (
          <BiMenu
            onClick={menuOpen}
            className="cursor-pointer md:hidden block text-4xl"
          />
        )}
        {isOpen && (
          <div
            className={`fixed left-0 right-0 top-[76px] md:hidden flex h-screen/2 w-screen flex-col items-center justify-center gap-10 bg-black/90 py-12 px-11 overflow-clip ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-8">
              {menuItems.map((link, index) => (
                <a
                  className="opacity-70 tranistion-all duration-300 hover:opacity-100"
                  key={index}
                  href={link.path}
                >
                  <li>{link.title}</li>
                </a>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-5">
              {linkItems.map((link, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 ${link.color}`}
                >
                  <a href={link.path} target="_blank">{link.logo}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
