import React from "react";
import Flyout from "../elements/flyout";
import { Link } from "react-router-dom";
import search from "../../styles/icons/search.svg";

export const Header = () => (
  <div className="header">
    <nav>
      <ul>
        <li>
          <Link className="logo" to="/">
            NIHARIKA GANDHARI
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Flyout label="Projects">
            <Link to="/Scrabble">Scrabble</Link>
          </Flyout>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/search">About</Link>
        </li>

        <li>
          <img src={search} alt="search icon" />
        </li>
         <li>
          <Link to="/login">Login</Link>
        </li>

      </ul>
    </nav>
  </div>
);

export default Header;
