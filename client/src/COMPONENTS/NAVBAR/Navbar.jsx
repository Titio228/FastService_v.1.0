import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/IMG/logo3.png";
import Avatar from "../../assets/IMG/avatar.png";

export default function Navbar() {
  const [showAdminSubmenu, setShowAdminSubmnu] = useState(false);

  const handleClickShowAdminSubmenu = () => {
    setShowAdminSubmnu(!showAdminSubmenu);
  };

  return (
    <div className="navbar">
      <NavLink to="/" activeClassName="active" className="link-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </NavLink>
      <div className="admin-general">
        <Link
          activeClassName="active"
          className="link"
          onClick={handleClickShowAdminSubmenu}
        >
          Admin
          <i class="fa-solid fa-bars"></i>
        </Link>
        <div
          className={
            showAdminSubmenu
              ? "link-submenu-admin-display"
              : "link-submenu-admin-hidden"
          }
        >
          <NavLink
            to="/users"
            activeClassName="active"
            className="link-submenu"
          >
            Utilisateurs
          </NavLink>
          <NavLink
            to="/flottes"
            activeClassName="active"
            className="link-submenu"
          >
            Flottes
          </NavLink>
          <NavLink
            to="/deliveries"
            activeClassName="active"
            className="link-submenu"
          >
            Livraisons
          </NavLink>
          <NavLink
            to="/promotions"
            activeClassName="active"
            className="link-submenu"
          >
            Promotions
          </NavLink>
        </div>
      </div>
      <NavLink to="/send" activeClassName="active" className="link">
        Envoyer un colis
      </NavLink>
      <NavLink to="/deliver" activeClassName="active" className="link">
        Transporter un colis
      </NavLink>
      <NavLink to="/faq" activeClassName="active" className="link">
        FAQ
      </NavLink>
      <NavLink to="/profile" activeClassName="active" className="link">
        <img src={Avatar} alt="Avatar" className="avatar" />
      </NavLink>
      <NavLink to="/login" activeClassName="active" className="link link-slide">
        Se connecter / S'inscrire
      </NavLink>
    </div>
  );
}
