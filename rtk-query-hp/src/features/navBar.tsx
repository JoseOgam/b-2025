import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between px-10">
        <div>
          <Link to="/">
            <h2>Harry Potter Characters</h2>
          </Link>
        </div>
        <div>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
