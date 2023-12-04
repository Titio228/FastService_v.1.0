import React from "react";
import "./SendPackages.css";
import FilterDistance from "../LIST/FilterDistance";
import FilterWeight from "../LIST/FilterWeight";
import ModalDeliverer from "../MODAL/ListDeliverer";
import Button from "../BUTTON/Button";

export default function SendPackage() {
  return (
    <div className="send-package">
      <div className="top-send">
        <h1 className="title-send">Envoyer un colis pas cher</h1>
        <p className="para1">
          Envoyer un colis pas cher c'est possible, en le confiant à un
          particulier qui le livrera sur son trajet!
        </p>
        <p className="para2">
          Utilisez notre simulateur pour estimer le coût de votre colis
        </p>
        <p className="para3">
          Ce tarif n'est qu'une estimation car sur <strong>FastService</strong>{" "}
          c'est vous qui fixez le prix de votre envoi, pas nous!
        </p>
        <p className="para4">
          Désormais vos envois vont vous coûter moins cher!
        </p>
        <div className="simulator">
          <h3 className="title-send-simulator">Calculer le prix d'envoi</h3>
          <div className="distance">
            <h4 className="simulator-title1">Distance</h4>
            <FilterDistance />
          </div>
          <div className="weight">
            <h4 className="simulator-title2">Taille du colis</h4>
            <FilterWeight />
          </div>
          <div className="deliver">
            <h4 className="simulator-title3">Prix estimé</h4>
            <p className="price-simulator">40€</p>
          </div>
          <div className="modal">
            <ModalDeliverer />
          </div>
          <p className="para-modal">
            Ce prix est une estimation. Vous serez libre de choisir le prix que
            vous souhaitez mors de la publication de votre annonce de colis.
          </p>
        </div>
        <div className="send-box">
          <Button
            btnContainer="container-btn-xs"
            labelButton="Envoyer mon colis"
            design={"cyan"}
            path="/login/connection"
          />
        </div>
      </div>
      <div className="center-send">
        <div className="left-send">
          <h2 className="title-left-send">
            Comment envoyer un colis pas cher entre particiluers ?
          </h2>
          <p className="para10">
            Avec <strong>FastService</strong> c'est simple, vos colis sont
            livrés par des particuliers qui souhaitent rentabiliser leurs
            déplacements. Pourquoi faire appel à une société de transport, alors
            qu'un particulier fait déjà le trajet? L'avantage de la livraison de
            colis entre particuliers, c'est que ça vous coûte moins cher qu'un
            transporteur professionnel et vous n'êtes plus limité par les
            dimensions et le poids de votre colis.
          </p>
          <p className="para10">
            Pour qu'un livreur particulier prenne en charge l'expédietion d'un
            colis et son acheminement vous devez d'abord publier une annonce de
            la marchandise à transporter.
          </p>
          <p className="para10">
            En quelque clics votre annonce est en ligne. C'est simple et rapide
            et les livreurs inscrits sur <strong>FastService</strong> peuvent
            désormaient vous contacter.
          </p>
          <p className="para10">
            Vous bénéficier des meilleurs tarifs car c'est cous qui choississez
            le prix d'envoi du colis. C'est pour cela que vous pouvez profiter
            d'un envoi moins cher. Nous vous proposons une estimation de tarif
            que vous êtes libre d'ajuster en fonction de votre bdget.
          </p>
          <div className="btn-left-send">
            <Button
              labelButton={"Publier mon annonce"}
              color={"button-blue"}
              path="/login/connection"
            />
          </div>
        </div>
        <div className="right-send">
          <div className="localisation-send">
            <i class="fa-solid fa-location-dot"></i>
            <p className="para-localisation">
              Renseignez contact et adresse d'enlèvement du colis + contact et
              adresse de livraison.
            </p>
          </div>
          <div className="details-send">
            <i class="fa-solid fa-photo-film"></i>
            <p className="para-detail">
              Précisez les spécificités de votre colis: taille, description,
              photos.
            </p>
          </div>
          <div className="price-send">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <p className="para-price">
              Définissez le prix de la livraison de votre colis.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-send">
        <h1 className="title-bottom">Dimension d'un envoi de colis</h1>
        <h4 className="subtitle-bottom">
          Sur <strong>FastService</strong> les tailles des colis vont de XXL au
          XS. Indiquer la bonne taille du colis permet au livreur particulier de
          savoir s'il peut le prendre en charge dans son véhicule et ainsi vous
          faire bénéficier d'un envoi moins cher.
        </h4>
        <div className="box-tail-xxl">
          <h2 className="tail-xxl">XXL</h2>
          <p className="tail-para">
            Le colis est volumineux, il faudra un camion pour transporter: Lit,
            armoire, scooter, ...
          </p>
        </div>
        <div className="box-tail-l">
          <h2 className="tail-l">L</h2>
          <p className="tail-para">
            Le colis pourra être transporté dans un coffre de voiture: TV,
            micro-onde, petit meuble, ...
          </p>
        </div>
        <div className="box-tail-s">
          <h2 className="tail-s">S</h2>
          <p className="tail-para">
            Le colis tient dans un sac à dos: Documents, pochettes, ...
          </p>
        </div>
        <div className="box-tail-xl">
          <h2 className="tail-xl">XL</h2>
          <p className="tail-para">
            Il faudra un petit utilitaire pour transporter le colus: Matelas,
            commode, vélo, ...
          </p>
        </div>
        <div className="box-tail-m">
          <h2 className="tail-m">M</h2>
          <p className="tail-para">
            LE colis est de taille moyenne, il peut tenir dans une valise:
            Cafetière, ordinateur, ...
          </p>
        </div>
        <div className="box-tail-xs">
          <h2 className="tail-xs">XS</h2>
          <p className="tail-para">
            Petit colis qui peut tenir dans un sac à main: Clés, lunettes, ...
          </p>
        </div>
      </div>
    </div>
  );
}
