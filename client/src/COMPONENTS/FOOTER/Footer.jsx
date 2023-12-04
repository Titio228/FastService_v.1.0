import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Facebook from "../../assets/IMG/facebook.png";
import Twitter from "../../assets/IMG/twitter.png";
import Instagram from "../../assets/IMG/instagram.png";
import GooglePlay from "../../assets/IMG/googleplay.png";
import Button from "../BUTTON/Button";

export default function Footer() {
  const emailAddress = "support@fastservice.com";
  return (
    <div className="footer">
      <div className="left">
        <div className="title">Liens utiles</div>
        <Link to="/" className="link-footer">
          Découvrir l'application FastService
        </Link>
        <Link to="/" className="link-footer">
          Envoyer dun colis pas cher
        </Link>
        <Link to="/" className="link-footer">
          Comment expédier un colis
        </Link>
        <Link to="/" className="link-footer">
          Transporter des colis
        </Link>
        <Link to="/" className="link-footer">
          FAQ
        </Link>
      </div>
      <div className="center">
        <Link
          to="https://stripe.com/fr-be"
          className="link-footer"
          target="blank"
        >
          Paiement sécurisé
        </Link>
        <Link
          to="https://stripe.com/fr-be"
          className="link-footer"
          target="blank"
        >
          <strong className="stripe">Stripe</strong>
        </Link>
        <Link to="/" className="link-footer">
          Application mobile
        </Link>
        <Link
          to="https://play.google.com/store/games?device=windows&hl=fr"
          className="link-footer"
          target="blank"
        >
          <img
            src={GooglePlay}
            alt="TwiGooglePlaytter"
            className="logo-link-google"
          />
        </Link>
      </div>
      <div className="right">
        <div className="contact">
          <p>Rejoingez-nous</p>
          <div className="icon">
            <Link
              to="https://www.facebook.com"
              className="link-footer"
              target="blank"
            >
              <img src={Facebook} alt="Facebook" className="logo-link" />
            </Link>
            <Link
              to="https://twitter.com"
              className="link-footer"
              target="blank"
            >
              <img src={Twitter} alt="Twitter" className="logo-link" />
            </Link>
            <Link
              to="https://www.instagram.com"
              className="link-footer"
              target="blank"
            >
              <img src={Instagram} alt="Instagram" className="logo-link" />
            </Link>
          </div>
        </div>
        <Button labelButton="Contactez-nous" />
        <a href={`mailto:${emailAddress}`} className="link-footer">
          @ support@fastservice.com
        </a>
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <Link to="/" className="link-footer">
            0472596363
          </Link>
        </div>
      </div>
    </div>
  );
}
