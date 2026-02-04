import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="flex flex-row justify-between  px-3 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">My site</h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
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
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
