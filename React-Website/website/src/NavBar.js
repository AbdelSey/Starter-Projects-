import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1 className="title">React-NavBar!</h1>

        <ul className="nav-tags">
          <li>
            <a href="https://google.com"> Home </a>
          </li>
          <li>
            <a href="https://google.com"> Contacts </a>
          </li>
          <li>
            {" "}
            <a href="https://google.com"> Reviews </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
