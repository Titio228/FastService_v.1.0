import React from "react";
import "./Home.css";
import Button from "../BUTTON/Button";
import BoxImgHome from "../../assets/IMG/Box-home-img2.png";

export default function Home() {
  return (
    <div className="home">
      <div className="top-home">
        <h1 className="title-home">
          Transport de colis <br />
          entre <br />
          particuliers à moindre coût
        </h1>
        <div className="button-home">
          <Button labelButton="Envoyer un colis" color={"button-blue"} />
          <Button labelButton="Livrer un colis" color={"button-blue"} />
        </div>
        <div className="img-box">
          <img src={BoxImgHome} alt="Box image" className="box-img" />
        </div>
      </div>
      <div className="center-home">
        <div className="left-home">
          <h2 className="title-h2-home">Comment ça marche ?</h2>
          <p className="para">
            <strong>FastService</strong> met en relation des particuliers qui
            souhaitent envoyer des objets avec des <span>coursiers</span>
            particuliers qui souhaitent renatabiliser leurs déplacements en
            livrant des colis à leurs destinataires, sur leur trajet.
          </p>
          <p className="para">
            Depuis votre espace <strong>FastService</strong> vous pouvez tout
            gérer, que vous souhiatez expédier, recevoir ou livrer des colis.{" "}
          </p>
          <div className="annonce">
            <i class="fa-solid fa-up-right-from-square"></i>
            <h4>Vos annonces de colis</h4>
            <p className="para">
              Publiez et gérez vos annonces d'envoi de colis ou d'objets:
              chercher un transporteur colis partocilier, faire une proposition
              de livraison,...
            </p>
          </div>
          <div className="localisation">
            <i class="fa-solid fa-location-dot"></i>
            <h4>Vos zones de livraisons</h4>
            <p className="para">
              Enregristrez les villes où vous vous rendez régulièrement ou
              pnctuellement, pour être alerté des nouveaux colis à livrer dans
              vos secteurs.
            </p>
          </div>
          <div className="transaction">
            <i class="fa-solid fa-wallet"></i>
            <h4>Vos historiques de livraisons</h4>
            <p className="para underline">
              Après une livraison, suivez vos virements bancaires depuis votre
              compte.
            </p>
          </div>
        </div>
        <div className="right-home">
          <div className="annonce">
            <i class="fa-solid fa-box-open"></i>
            <h4>C'est très facile</h4>
            <p className="para">
              Que vous soyez expéditeur ou destinataire, déposez une annonce
              décrivant le colis à envoyer.
            </p>
          </div>
          <div className="localisation">
            <i class="fa-solid fa-user-clock"></i>
            <h4>En temps réel</h4>
            <p className="para">
              <strong>FastService</strong> connecte les annonceurs avec les
              particuliers & transporteurs qui font le trajet. Mettez-vous
              d'accord sur les modalités du transport.
            </p>
          </div>
          <div className="transaction">
            <i class="fa-solid fa-shield-halved"></i>
            <h4>100% sécurisé</h4>
            <p className="para">
              Un accord est trouvé ? Bloquez la réservation en payant sur le{" "}
              <strong>FastService</strong> L'argent sera versé au transporteur
              une fois le bien réceptionné par le destinataire.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-home">
        <i class="fa-solid fa-quote-right"></i>
        <p className="para-perso">
          Chaque mois, j'économise entre 150 et 200€ minimum sur mes frais de
          déplacements, en livrant des colis. C'est tout benef pour moi : àa
          paye mon carburant et l'usure de ma voiture.
        </p>
      </div>
    </div>
  );
}
