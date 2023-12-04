import React from "react";
import "./DeliveryPerson.css";
import BUTTON from "../BUTTON/Button";

export default function DeliveryPerson() {
  return (
    <div className="delivery-person">
      <div className="top-deliver">
        <h1 className="title-deliver">Transporter un colis</h1>
        <p className="para-top-deliver">
          Avec <strong>FastService</strong> devenez transporteur de colis en
          proposant l'espace disponible dans votre véhicule, votre valise ou
          votre sac et remboursez vos frais de déplacement. Vos trajet
          deviennent utiles et vous rapportent un peu d'argent.
        </p>
        <div className="btn-deliver-container">
          <div className="btn-deliver">
            <BUTTON labelButton={"Livrer des colis"} color={"button-red"} />
          </div>
          <div className="btn-send-deliver">
            <BUTTON labelButton={"Envoyer un colis"} color="button-cyan" />
          </div>
        </div>
      </div>
      <div className="center-deliver-top">
        <h2 className="title-center-top">Transport et livraison de colis</h2>
        <p className="para1">
          Vous cherchez une façon d’arrondir vos fins de mois, de réduire vos
          frais de déplacements, et de rendre service ? Avec
          <strong> FastService</strong> vous effectuez le transport et la
          livraison de colis pour d’autres particuliers en échange d’une
          rétribution !
        </p>
        <p className="para2">
          Sur <strong>FastService</strong> les transporteurs sont des
          utilisateurs qui sont amenés à se déplacer ponctuellement ou
          régulièrement, en voiture, en train, en camion, en avion, en scooter,
          … Ils prennent en charge les colis disponibles sur leur trajet pour
          les livrer à leur destinataires. Ils rendent service aux expéditeurs
          qui ne trouvent pas d’autre solution d’expédition de colis.
        </p>
        <p className="para3">
          Pour devenir livreur de colis il vous suffit simplement de créer votre
          compte gratuitement en quelques clics.
        </p>
        <div className="btn-center-top">
          <BUTTON labelButton={"M'inscrire"} color={"button-red"} />
        </div>
        <div className="container">
          <div className="mycost">
            <div className="mycost-container">
              <i class="fa-solid fa-check"></i>
              <h4 className="title-mycost">Rentabiliser mes frais de route</h4>
            </div>
            <p className="para-mycost">
              Au lieu de transporter des passagers, vous transportez des colis
              ou des objets.
            </p>
          </div>
          <div className="mymove">
            <div className="mymove-container">
              <i class="fa-solid fa-check"></i>
              <h4 className="title-mymove">Rendre mes déplacements utiles</h4>
            </div>
            <p className="para-mymove">
              En proposant à des particuliers l’espace disponible dans votre
              véhicule ou votre valise.
            </p>
          </div>
          <div className="myactor">
            <div className="myactor-container">
              <i class="fa-solid fa-check"></i>
              <h4 className="title-myactor">
                Devenir acteur d'un système plus solidaire
              </h4>
            </div>
            <p className="para-myactor">
              Intégrez la communauté WaytoMe et rendez service aux autres
              membres !
            </p>
          </div>
        </div>
      </div>
      <div className="center-deliver-bottom">
        <h2 className="title-center-bottom">
          Transporteur de colis : comment livrer ?
        </h2>
        <div className="myinscription">
          <div className="myinscription-container">
            <i class="fa-solid fa-check"></i>
            <h4 className="title-myinscription">
              S'inscrire et enregistrer ses zones de livraison
            </h4>
          </div>
          <p className="para-myinscription">
            Une fois inscrit vous pouvez renseigner vos zones de livraison. Il
            s’agit des villes sur lesquelles vous vous déplacez régulièrement ou
            ponctuellement et sur lesquelles vous pourrez transporter des colis.
          </p>
        </div>
        <div className="myanswer">
          <div className="myanswer-container">
            <i class="fa-regular fa-comments"></i>
            <h4 className="title-myanswer">
              Répondre aux demandes de transport
            </h4>
          </div>
          <p className="para-myanswer">
            Une fois vos villes enregistrées vous êtes alerté des nouvelles
            demandes de transport de colis. Vous pouvez aussi rechercher des
            colis à livrer. Vous pouvez répondre aux demandes de livraisons et
            proposer vos services pour transporter un colis. Vous pouvez
            négocier le prix de la livraison ou discuter avec l’expéditeur.
          </p>
        </div>
        <div className="mytaking">
          <div className="mytaking-container">
            <i class="fa-regular fa-thumbs-up"></i>
            <h4 className="title-mytaking">
              Prendre en charge un colis et le livrer
            </h4>
          </div>
          <p className="para-mytaking">
            Vous vous êtes mis d’accord sur les conditions de prise en charge du
            colis et son acheminement : la date, le créneau horaire. Vous pouvez
            désormais vous rendre sur le lieu d’enlèvement du colis.
            L’expéditeur vous demandera alors une signature sur l’application
            pour attester du bon enlèvement. Une fois le trajet effectué et
            arrivé sur le lieu de livraison vous remettez le colis à son
            destinataire. Ce dernier vous communiquera un code pour valider la
            fin de la course et recevoir votre argent.
          </p>
        </div>
        <div className="btn-start-deliver">
          <BUTTON labelButton={"Commencer à livrer"} color="button-red" />
        </div>
      </div>
      <div className="bottom-deliver">
        <div className="container-why">
          <h2 className="why-deliver">
            Pourquoi faire appel à un particulier transporteur ?
          </h2>
          <p className="para-why-deliver">
            Le principe de la livraison de colis entre particuliers repose sur
            l’échange de services. En tant que particulier transporteur vous
            rentabilisez vos déplacements en livrant des colis. Les expéditeurs
            de leur côté contribuent à vos frais de route et payent leur envoi
            moins cher qu’en faisant appel à une société de transport. C’est une
            solution gagnant-gagnant pour tous.
          </p>
        </div>
        <div className="container-cost">
          <h2 className="cost-deliver">Combien rapporte une livraison ?</h2>
          <p className="para-cost-deliver">
            Le prix d’un envoi avec <strong>FastService</strong> est libre. Vous
            êtes aussi libre de négocier le tarif de livraison si celui-ci vous
            paraît trop faible, dans la mesure du raisonnable bien sûr. Le prix
            minimum d’une course est de 7€. S’il s’agit d’un gros colis à
            transporter sur une longue distance les prix peuvent grimper à 50€
            ou plus. <strong>FastService</strong> ne prélève pas de commission
            sur les rétributions des transporteurs. Seul l’expéditeur paye les
            frais de livraison.
          </p>
        </div>
        <div className="container-where">
          <h2 className="where-deliver">Où peut-on livrer des colis ?</h2>
          <p className="para-where-deliver">
            Partout. Les demandes d’expédition se font partout en Belgique, mais
            il peut aussi y avoir des envois de colis en Europe et notamment
            dans les pays limitrophes comme en France, en Allemagne, en Italie,
            … Vous pouvez retirer les colis dans un point-relais, chez un
            particulier, dans un magasin. La livraison peut se faire au domicile
            des destinataires, dans une entreprise, chez un commerçant, …
          </p>
          <p className="para-where-deliver">
            Les livraisons peuvent donc se faire sur de longs trajets comme un
            Lège-Bruxelles par exemple. Mais parfois les demandes de transport
            peuvent se faire inter ville, de centre à centre, un Liège-Liège ou
            Bruxelles-Bruxelles. Il s’agit alors de petites livraisons de
            coursier.
          </p>
        </div>
        <div className="container-wait">
          <h2 className="wait-deliver">
            Il y a t-il des délais de livraison ?
          </h2>
          <p className="para-wait-deliver">
            Le délai de livraison dépend des impératifs des expéditeurs. Il peut
            parfois s’agir d’une demande de livraison rapide et urgente. Les
            expéditeurs peuvent aussi s’adapter à vos disponibilités et attendre
            plusieurs jours la livraison du colis à expédier.
          </p>
        </div>
      </div>
    </div>
  );
}
