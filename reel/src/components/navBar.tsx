import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="flex flex-row justify-between  px-3 py-4">
        {/* Logo */}
        <div>
          <img src={Logo} width={70} height={100} alt="Logo" />
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-6">
          <Link className=" hover:text-blue-300 transition" to="/">
            Home
          </Link>
          <Link className=" hover:text-blue-300 transition" to="/about">
            About
          </Link>
          <Link className=" hover:text-blue-300 transition" to="">
            Gallery
          </Link>
          <Link className=" hover:text-blue-300 transition" to="/contact">
            Contact
          </Link>
        </div>

        {/* mobile menu button*/}
        <div
          className=" md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {isOpen && (
          <div className=" md:hidden flex flex-col items-center space-y-3 pb-4 bg-white ">
            <Link
              className=" hover:text-blue-300 transition"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className=" hover:text-blue-300 transition"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className=" hover:text-blue-300 transition"
              to=""
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              className=" hover:text-blue-300 transition"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
