import React, { memo } from "react";
import "../Assests/Styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Header(props: any) {
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
              props.setShowSearch(true)
            }
          >
            <SearchIcon />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default memo(Header);
