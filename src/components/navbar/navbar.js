import React from "react";

import "./navbar.css";

import { NavbarGlobalContext } from "../context/navbarContext";
import navData from "./navData";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = NavbarGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const location = e.target.getBoundingClientRect();
    const top = location.top;
    const bottom = location.bottom;
    const right = location.right;
    const left = location.left;
    openSubmenu(page, { top, bottom, right, left });
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="navbar" onMouseOver={handleCloseSubmenu}>
      <ul className="nav-list">
        {navData.map((currentItem, index) => {
          const { page, links } = currentItem;
          return (
            <li className="nav-item" key={index}>
              {links.icon}
              <a
                href={`${links.url}`}
                className="nav-link"
                onMouseOver={displaySubmenu}>
                {page}
              </a>
              <div className="icon_container">
                {currentItem.sublinks && <FaCaretDown />}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
