import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li><NavLink to="/accommodation">Accommodation</NavLink></li>
          <li><NavLink to="/summer-holiday">Summer</NavLink></li>
          <li><NavLink to="/"><img className="logo" src="/berliner-hotel-logo.jpg" alt="Hotel Logo" /></NavLink></li>
          <li><NavLink to="/winter-holiday">Winter</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
