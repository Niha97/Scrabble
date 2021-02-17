import React from "react";
import Flyout from "../elements/flyout";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="header">
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li>
          <Link to="/projects">
            <Flyout label="Projects">
              <Link to="/Scrabble">Scrabble</Link>
            </Flyout>
          </Link>
        </li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/login"></Link>Login</li>
      </ul>
    </nav>
  </div>
);

export default Header;
