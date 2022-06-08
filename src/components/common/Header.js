import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ type }) {
  const style = { color: "darkgreen", fontWeight: "600" };
  return (
    <header className={type}>
      <div className="inner">
        <h1>
          <Link to="/">Mayfield</Link>
        </h1>

        <ul id="gnb">
          <li>
            <NavLink activeStyle={style} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to="/community">
              COMMUNITY
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to="/gallery">
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to="/youtube">
              YOUTUBE
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to="/location">
              LOCATION
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={style} to="/join">
              JOIN
            </NavLink>
          </li>
        </ul>

        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
