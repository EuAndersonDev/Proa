import React from "react";
import {Link } from "react-router-dom";

import Style from "../css/Header.module.css";
import Logo from "../assets/imagens/viagens.jpg";
import Lupa from "../assets/imagens/lupa.png";

function Header() {
  return (
    <header>
      <div className={Style.logo}>
        <img src={Logo} alt="Logo da agência" />
      </div>

      <div className={Style.links}>
        <nav className={Style.menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/canyon">Grand Canyon</Link>
            </li>
            <li>
              <Link to="/katmandu">Katmandu</Link>
            </li>
            <li>
              <Link to="/muralha">Muralhas da China</Link>
            </li>
            <li>
              <Link to="/aruba">Aruba</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={Style.pesquisa}>
        <input type="search" />
      </div>

      <div className={Style.lupa}>
        <img src={Lupa} alt="" />
      </div>
    </header>
  );
}

export default Header;
