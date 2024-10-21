
import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <ol className="navbar__container">
        <li className="navbar__item">Profile</li>
        <li className="navbar__item">Messages</li>
        <li className="navbar__item">Users</li>
      </ol>
    </div>
  );
}

export default Navbar;