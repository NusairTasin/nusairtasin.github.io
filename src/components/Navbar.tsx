import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const menuItems = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];
const linkItems = [
  { logo: <BsYoutube />, path: "#link", color: "hover:text-red-500" },
  { logo: <BsLinkedin />, path: "link", color: "hover:text-blue-500" },
  { logo: <BsGithub />, path: "link", color: "hover:text-orange-500" },
  { logo: <BsTwitterX />, path: "link", color: "hover:text-white" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="text-white fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 sm:px-16 px-12 py-5 backdrop-blur-md md:justify-evenly">
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent opacity-90 hover:opacity-100 text-2xl font-semibold transition-all duration-300"
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
              {link.logo}
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
            className={`fixed right-0 top-[84px] md:hidden flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
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

            <ul className="grid grid-cols-4 gap-7">
              {linkItems.map((link, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 ${link.color}`}
                >
                  {link.logo}
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
