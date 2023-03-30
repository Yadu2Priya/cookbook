import { NavLink } from "react-router-dom";

const NavBar = ({ setSearch }) => {
  const handleSearch = () => {
    setSearch("");
  };

  return (
    <nav className="btn">
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { color: "red", textDecoration: "none" }
            : { color: "black", textDecoration: "none" }
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={handleSearch}
        style={({ isActive }) =>
          isActive
            ? { color: "red", textDecoration: "none" }
            : { color: "black", textDecoration: "none" }
        }
        to="RecipesIndex"
      >
        Recipe List
      </NavLink>
    </nav>
  );
};

export default NavBar;
