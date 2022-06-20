import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer({ type }) {
  return (
    <footer className={type}>
      <div className="inner">
        <div className="left">
          <Link to="/">Mayfield</Link>
          <p>2022 Mayfield &copy; ALL RIGHTS RESERVED.</p>
        </div>
        <div className="right">
          <span className="shape_paral">
            <a href="#">buy now</a>
          </span>

          <span className="shape_paral icon">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </span>
          <span className="shape_paral icon">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>

          <ul className="ft_gnb">
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/community">COMMUNITY</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">GALLERY</NavLink>
            </li>
            <li>
              <NavLink to="/youtube">YOUTUBE</NavLink>
            </li>
            <li>
              <NavLink to="/location">LOCATION</NavLink>
            </li>
            <li>
              <NavLink to="/join">JOIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
