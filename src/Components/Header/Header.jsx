import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/history"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          History
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/tours"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Tours
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/contacts"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Contacts
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/signInForm"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Sign In
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/joinus"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Join Us
        </NavLink>
      </div>
    </nav>

    // <div className={s.header}>
    //   <div className={s.wrapper}>
    //     <a href="№" className={s.logo}>
    //       <img
    //         src="https://images.squarespace-cdn.com/content/v1/5fa91e1b46afcb634fe73d42/1604918947749-1D4OM3XCGTT22TU8K5AO/Behemoth+logo.png?format=1500w"
    //         alt="Behemoth"
    //       ></img>
    //     </a>
    //     <div className={s.right_header}>
    //       <ul className={s.menu_top}>
    //         <li>
    //           <a href="#">History</a>
    //         </li>
    //         <li>
    //           <a href="#">Tours</a>
    //         </li>
    //         <li>
    //           <a href="#">CONTACTS</a>
    //         </li>
    //       </ul>
    //       <div className={s.btns}>
    //         <a href="#" className={s.btn_light}>
    //           Sign In
    //         </a>
    //         <a href="#" className={s.btn_green}>
    //           Join Us
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
