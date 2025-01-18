import React, { useEffect, useRef } from "react";
import "./navbar.css";
import { NavbarGlobalContext } from "../context/navbarContext";

const SubSublinks = () => {
  const { navSubSublink, sublocation, isSubSubmenuOpen, closeSubSubmenu } =
    NavbarGlobalContext();

  const container = useRef();

  useEffect(() => {
    const subsubmenu = container.current;
    const { top, bottom, left, right } = sublocation;
    subsubmenu.style.top = `${top - 20}px`;
    // submenu.style.bottom = `${bottom}px`;
    subsubmenu.style.left = `${left + 120}px`;
    // submenu.style.right = `${right}px`;
  }, [navSubSublink, sublocation]);

  return (
    <divs
      ref={container}
      className={`${isSubSubmenuOpen ? "show-sublink" : "hide-sublink"}`}>
      {navSubSublink.subsubLinks &&
        navSubSublink.subsubLinks.map((currentItem, index) => {
          return (
            <div className="sublink_li" key={index}>
              {currentItem.label}
            </div>
          );
        })}
    </divs>
  );
};

export default SubSublinks;
