import "../Assests/Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h1>MovLib</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
        <li><Link to="/people">People</Link></li>
      </ul>
    </div>
  );
}

export default Header;
