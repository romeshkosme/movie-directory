import React from "react";
import "../Assests/Styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../Pages/Search";

function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <React.Fragment>
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
          <li>
            <Link to="/people">People</Link>
          </li>
          <li
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              setShowSearch(!showSearch)
            }
          >
            <SearchIcon />
          </li>
        </ul>
      </div>
      {showSearch && <Search closeSearch={setShowSearch} />}
    </React.Fragment>
  );
}

export default Header;
