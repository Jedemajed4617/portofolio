import "./header.css";
import "./about.css";
import "./skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom"; // Import Link from React Router

function Header() {
  return (
    <header>
      <div className="imgcon">
        <FontAwesomeIcon className="fontawesomehead" icon={faFaceLaugh} />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="pc"><Link to="/">Home</Link></li>
          <li className="phone"><Link to="/"><FontAwesomeIcon class="icon" icon={faBookmark} /></Link></li>
          <li><Link to="about">About Me</Link></li>
          <li><Link to="skills">Skills</Link></li>
          <li className="dropdown">
            <a href="">Projects &#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="school">School</Link></li>
              <li><Link to="selfmade">Selfmade</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="buttoncon">
        <button>Contact Me</button>
      </div>
    </header>
  );
}

export default Header;