import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { link: "Beranda", path: "home" },
    { link: "Fitur", path: "feature" },
    { link: "Tentang", path: "about" },
    { link: "Artikel", path: "article" },
    { link: "Harga", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-[#10439F] md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-white fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold items-center space-x-3"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9w5g7s9UT_XyHNDTQeBCUORwbHoMS2RWWZmpYiqD-PIc1RN5XttcF2C-K5MNPeO567ZU9r_2wE_O6VGq1ZdtyzU8PaD1gsvvIS6ThCh6V8NAOgsEFkHW97BjvReA40HBwXD5VUKtZfAjJXprqhWXnz_AanpEAeT9xu0bpnOtbYl7x40UQ8NtocUs/w75-h96/LOGO%20ELHAQQA1%20-%20White1.png"
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>El Haqqa Quranic School</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItem.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  key={link}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* <div className="space-x-12 hidden md:flex items-center">
            <a href="/" className="hidden lg:flex items-center">
              <GrLanguage className="mr-2" />
              <span className="hover:text-secondary">Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div> */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-24 pb-5 text-xl bg-secondary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItem.map(({ link, path }) => (
          <Link
            activeClass="active"
            key={link}
            to={path}
            spy={true}
            smooth={true}
            offset={-80}
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
