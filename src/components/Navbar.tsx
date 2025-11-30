import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>PORTFOLIO.</h2>
      <ul className="nav-links">
        <li>
          <Link to="/cphfw" className="nav-link">
            Copenhagen Fashion Week
          </Link>
        </li>
        <li>
          <Link to="/botanical-garden" className="nav-link">
            Botanical Garden
          </Link>
        </li>
        <li>
          <Link to="/nhm" className="nav-link">
            Natural History Museum
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
