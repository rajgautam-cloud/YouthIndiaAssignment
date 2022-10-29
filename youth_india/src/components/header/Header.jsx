import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
const Header = () => {
  return (
    <div className="mainDiv">
      <div className="mainContainer">
        <div>
          <h1 className="App">POKE FINDER</h1>
        </div>
        <div>
          <Link to="/search">
            <h1 style={{ fontSize: "50px", textDecoration: "none" }}>
              🔍 Search
            </h1>
          </Link>
        </div>
        <div className="subContainer">
          <h1 className="tabs">
            <Link to="/">Season 1</Link>
          </h1>
          <h1 className="tabs">
            <Link to="/scroll">Season 2</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
