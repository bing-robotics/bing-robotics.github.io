import React from "react";
import logo from "../assets/logo1.jpeg";

function Header() {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Binghamton University Logo" />
          <h1>Binghamton Robotics Seminar Talks</h1>
        </header>
        <header className="App-navbar">
          <nav>
            <ul>
              <li><a href="#upcoming-talks">UPCOMING TALKS</a></li>
              <li><a href="#past-talks">PAST TALKS</a></li>
              <li><a href="#archive">ARCHIVE</a></li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
  
  export default Header;