import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../image/header__logo.svg";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState(() => 
    localStorage.getItem('selectedLanguage') || 'RU'
  );

  const handleClick = (language) => {
    const lng = language.toLowerCase();
    setActiveLink(language);
    localStorage.setItem('selectedLanguage', language);
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <img className="header__logo" alt="logotype" src={logo} />
      <div className="header__link-container">
        <NavLink
          to="*"
          className={`header__link header__link-RU ${
            activeLink === "RU" ? "header__link_active" : ""
          }`}
          onClick={() => handleClick("RU")}
        >
          Ru
        </NavLink>
        <NavLink
          to="*"
          className={`header__link header__link-EN ${
            activeLink === "EN" ? "header__link_active" : ""
          }`}
          onClick={() => handleClick("EN")}
        >
          En
        </NavLink>
      </div>
    </header>
  );
}
