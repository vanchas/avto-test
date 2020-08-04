import React from "react";
import s from "./login.module.scss";
import { Link } from "react-router-dom";

export default function LoginPageControl({ langData }) {
  return (
    <nav>
      <ul className={s.nav_links}>
        <Link to="/login/sign-in" className={`px-3 py-2 mr-2 ${s.nav_link}`}>
          {langData.nav_item_sign_in}
        </Link>
        <Link to="/login/sign-up" className={`px - 3 py-2 ${s.nav_link}`}>
          {langData.nav_item_sign_up}
        </Link>
      </ul>
    </nav>
  );
}
