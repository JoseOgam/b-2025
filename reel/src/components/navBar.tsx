import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="flex flex-row justify-end space-x-3.5 px-3 py-4">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
