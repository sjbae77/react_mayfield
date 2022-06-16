import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ type }) {
  return (
    <header className={type}>
      <div className="inner">
        <h1>
          <Link to="/">Mayfield</Link>
        </h1>

        <ul id="gnb">
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">GALLERY</NavLink>
          </li>
          <li>
            <NavLink to="/youtube">YOUTUBE</NavLink>
          </li>
          <li>
            <NavLink to="/community">COMMUNITY</NavLink>
          </li>
          <li>
            <NavLink to="/location">LOCATION</NavLink>
          </li>
          <li>
            <NavLink to="/join">JOIN</NavLink>
          </li>
        </ul>

        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
