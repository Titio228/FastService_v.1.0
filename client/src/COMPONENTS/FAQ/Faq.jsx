import React, { useState } from "react";
import "./Faq.css";
import Button from "../BUTTON/Button";

export default function Faq() {
  const [totalCharacter, setTotalCharacter] = useState("");

  const totalCharacterCount = (e) => {
    setTotalCharacter(e.target.value);
  };

  return (
    <div className="faq">
      <div className="top-faq">
        <h1 className="title-faq">
          Fonctionnement de la plateforme de livraison de colis
        </h1>
        <h3 className="titleh3-faq">
          Découvrez le fonctionnement de FastService, plateforme de livraison de
          colis entre particuliers. Comment expédier un colis avec FastService,
          comment livrer des colis, …
        </h3>
        <div className="btn-faq-top">
          <Button
            labelButton="Envoyer un colis"
            design="cyan"
            className="container-btn-xs"
          />
          <Button
            labelButton="Livrer un colis"
            design="red"
            className="container-btn-xs"
            path="/"
          />
          <Button
            labelButton="Utiliser FastService"
            design="blue"
            className="container-btn-xs"
            path="/"
          />
          <Button
            labelButton="Nous contacter"
            design="white"
            className="container-btn-xs"
            path="/"
          />
        </div>
      </div>
      <div className="section1-faq">
        <h2 className="h2-faq">Envoyer un colis avec FastService</h2>
        <div className="line"></div>
        <div className="details-box">
          <details>
            <summary>Comment envoyer un colis ?</summary>
            <p>
              Rien de plus simple ! Il suffit de créer et publier une annonce de
              colis de façon à ce que les livreurs disponibles puissent vous
              contacter pour effectuer la livraison.
            </p>
          </details>
          <details>
            <summary>Comment créer une annonce de colis ?</summary>
            <p>
              Il suffit de remplir le formulaire de création d’annonce en
              renseignant :<li>Adresse et contact au départ</li>
              <li>Adresse et contact à l’arrivée</li>
              <li>Description du colis (taille, photos, …)</li>
              <li>Prix que vous souhaitez payer</li>
              Vous validez, c’est en ligne ! Les livreurs qui font le même
              trajet que votre colis pourront alors vous contacter pour vous
              proposer une livraison.
            </p>
          </details>
          <details>
            <summary>Quel prix fixer pour la livraison ?</summary>
            <p>
              Pour vous aider à définir un tarif nous avons mis en place un
              outil de suggestion de prix basé sur la taille du colis et la
              distance. Vous êtes toutefois libre d’ajuster ce tarif à la hausse
              ou à la baisse. Vous pouvez utiliser notre simulateur pour évaluer
              le prix de votre envoi.
            </p>
          </details>
          <details>
            <summary>A quel moment dois-je payer ?</summary>
            <p>
              Vous ne payez que lorsqu’un livreur a accepté votre livraison. Le
              paiement s’effectue par carte bancaire, par le biais de notre
              plateforme sécurisée Stripe. L’argent est bloqué le temps de la
              livraison. Dès que le livreur confirme la livraison du colis il
              peut recevoir sa rétribution.
            </p>
          </details>
          <details>
            <summary>
              Puis-je contacter directement un livreur pour lui proposer mon
              colis ?
            </summary>
            <p>
              Bien sur, vous pouvez utiliser notre outil de recherche pour
              trouver des livreurs, et consulter leur profil. Si l’un d’eux
              correspond à vos critères vous pouvez choisir le colis que vous
              souhaitez lui proposer à livrer. Si vous n’avez pas encore créé
              d’annonce pour ce colis, il vous faudra la publier avant de lui
              proposer.
            </p>
          </details>
          <details>
            <summary>J'ai reçu un code. A quoi sert-il ?</summary>
            <p>
              Le code reçu doit permettre au livreur de valider la livraison.
              Vous devez donc le transmettre au destinataire de votre colis,
              afin qu’il puisse le donner au livreur lorsqu’il aura bien
              réceptionné le colis. Si vous oubliez de le donner au
              destinataire, le livreur pourra revenir vers vous pour vous le
              demander.
            </p>
          </details>
          <details>
            <summary>
              Un livreur a accepté mon colis, mais il ne peut finalement plus le
              livrer. Serais-je remboursé(e) ?
            </summary>
            <p>
              Si un livreur annule votre livraison pour une quelconque raison,
              vous serez remboursé de l’intégralité du montant payé. A savoir la
              rétribution + les frais de mise en relation.
            </p>
          </details>
          <details>
            <summary>
              Si c'est moi qui annule la livraison, serais-je remboursé(e) ?
            </summary>
            <p>
              Si vous annulez une livraison après le paiement, vous serez
              remboursé du montant de la rétribution du livreur. Vous ne serez
              cependant pas remboursé des frais de mises en relation. En effet,
              conformément à nos CGU, nous considérons que la mise en relation a
              bien été effectuée.
            </p>
          </details>
          <details>
            <summary>
              Quelles certitudes ai-je que mon colis sera bien livré ?
            </summary>
            <p>
              La livraison de colis entre particuliers fonctionne sur le
              principe de la confiance. Les livreurs peuvent eux aussi utiliser
              la plateforme pour expédier des colis. Par conséquent soyez assuré
              qu’ils prennent soin de vos colis comme si c’était les leurs. De
              plus, si votre colis n’est pas livré, le livreur ne percevra pas
              sa rétribution pour la livraison et sera bannit de notre
              plateforme de livraison de colis. Les livreurs n’ont aucun intérêt
              à ne pas assurer leurs livraisons.
            </p>
          </details>
          <details>
            <summary>
              Il y a-t-il une assurance proposée sur FastService ?
            </summary>
            <p>
              Nous ne proposons pas d’assurance sur les colis transportés. Les
              colis sont sous la responsabilité des livreurs. L’expéditeur doit
              toutefois s’assurer que son colis est bien protégé avant de le
              faire transporter. A ce jour nous n’avons pas rencontré d’incident
              de livraison.
            </p>
          </details>
        </div>
        <div className="btn-faq">
          <Button labelButton="Envoyer un colis" design="cyan" />
        </div>
      </div>
      <div className="section2-faq">
        <h2 className="h2-faq">Livrer des colis avec FastService</h2>
        <div className="line"></div>
        <div className="details-box">
          <details>
            <summary>
              Quelles sont mes obligations en tant que livreur ?
            </summary>
            <p>
              En tant que livreur, votre principale obligation est d’effectuer
              la livraison selon les conditions déterminées avec l’expéditeur, à
              savoir :<li>Récupérer le colis à l’adresse de départ</li>
              <li>
                Le livrer en temps et en heure à l’adresse du destinataire
              </li>
              <li>Respecter l’intégrité du colis durant le transport</li>
              Lorsque vous acceptez de livrer un colis, vous acceptez de facto
              la charte d’engagement de FastService.
            </p>
          </details>
          <details>
            <summary>
              Quels moyens de transport puis-je utiliser pour livrer des colis ?
            </summary>
            <p>
              Tous les moyens sont bons pour livrer des colis; que vous soyez en
              vélo, en voiture, en camionnette, en train ou en avion. Seul le
              moyen que vous choisirez impactera votre capacité de livraison.
              Bien entendu, si vous disposez d’un grand coffre vide, vous
              pourrez livrer plus de colis ou des colis plus grands !
            </p>
          </details>
          <details>
            <summary>
              Que faire pour recevoir des propositions de livraison ?
            </summary>
            <p>
              Depuis votre espace personnel FastService vous pouvez renseigner
              vos zones de livraison. Il s’agit des villes où vous êtes
              susceptible de vous déplacer ponctuellement ou régulièrement. Vous
              serez alors alerté dès qu’un nouveau colis doit être livré dans
              ces zones. Vous pouvez aussi utiliser l’outil de recherche pour
              trouver d’autres colis à livrer.
            </p>
          </details>
          <details>
            <summary>Pourquoi renseigner des zones de livraison ?</summary>
            <p>
              Tout simplement parce-que si un colis correspond à l’une de vos
              zones de livraison vous serez notifié. Ainsi, plus vous renseignez
              de villes où vous vous déplacez, plus vous avez d’opportunités de
              livrer des colis. Vous devrez renseigner pour chaque zone de
              livraison votre capacité de livraison. Cela vous permettra de
              recevoir les annonces de colis qui correspondent à l’espace
              disponible dont vous disposez (Taille XS, S, M, L, XL, XXL).
            </p>
          </details>
          <details>
            <summary>
              Est-ce que je peux transporter plusieurs colis en même temps ?
            </summary>
            <p>
              Vous pouvez bien sûr livrer plusieurs colis en même temps ! Tant
              que vous disposez de la place nécessaire et que vous respectez les
              conditions mises en place avec les expéditeurs, vous êtes libre !
            </p>
          </details>
          <details>
            <summary>
              Le prix proposé pour une livraison ne me convient pas, que puis-je
              faire ?
            </summary>
            <p>
              Si le prix proposé par un expéditeur pour livrer son colis ne vous
              convient pas, vous pouvez lui faire une nouvelle proposition de
              tarif en cliquant sur le bouton « négocier ». Vous pourrez alors
              choisir un nouveau tarif pour effectuer la livraison. Vous devrez
              cependant attendre que l’expéditeur valide cette nouvelle offre.
            </p>
          </details>
          <details>
            <summary>J'ai terminé une livraison, que dois-je faire ?</summary>
            <p>
              Lorsque vous avez livré un colis à son destinataire, vous devez
              valider la livraison. Pour cela, le destinataire du colis doit
              vous remettre un code de validation à 4 chiffres. S’il ne l’a pas,
              vous pouvez le demander à l’expediteur. Ensuite, vous pourrez
              renseigner ce code sur l’annonce du colis livré pour finaliser la
              transaction.
            </p>
          </details>
          <details>
            <summary>
              Que faire pour recevoir l'argent d'une livraison ?
            </summary>
            <p>
              Pour recevoir l’argent de vos livraisons sur votre compte bancaire
              vous devez au préalable avoir validé votre compte en renseignant
              certaines informations et en téléchargeant les documents suivants
              :<li>Pièce d’idendité à votre nom</li>
              <li>RIB à votre nom</li>
              <li>Justificatif de domicile à votre nom.</li>
              La validation des documents peut prendre jusqu’à 48h. Une fois vos
              documents vérifiés, et la livraison validée l’argent est
              directement transféré sur votre compte bancaire. Le montant peut
              mettre plusieurs jours avant d’apparaître sur votre compte
              bancaire. Vous pouvez suivre vos transferts d’argent sur votre
              compte dans l’onglet « Historique de virement ».
            </p>
          </details>
          <details>
            <summary>
              J'ai accepté une livraison, mais je ne peux plus faire le
              déplacement, que dois-je faire ?
            </summary>
            <p>
              Dans le cas où c’est vous qui devez annuler une livraison, nous
              vous demandons tout d’abord d’en informer l’expéditeur par respect
              et courtoisie. Ensuite vous devez en informer FastService en
              adressant un email à contact@FastService.com. Nous nous chargerons
              d’annuler la transaction. L’annonce du colis sera alors de nouveau
              disponible pour les autres livreurs potentiels. Quant à
              l’expéditeur, il sera remboursé.
            </p>
          </details>
          <details>
            <summary>
              L'expéditeur a annulé la livraison. Serai-je payé ?
            </summary>
            <p>
              Dans le cas où l’expéditeur annule la livraison, vous ne toucherez
              pas votre rétribution puisqu’il n’y aura pas eu de livraison.{" "}
            </p>
          </details>
          <details>
            <summary>
              Comment être certain de ne pas transporter des marchandises
              illicites ?
            </summary>
            <p>
              FastService demande explicitement aux expéditeurs de préciser la
              nature des marchandises expédiées. Cependant, nous ne pouvons pas
              les contrôler directement. Pour vous rassurer sur ce point, vous
              pouvez, lors de l’enlèvement du colis, contrôler la nature des
              marchandises en présence de l’expéditeur. Conformément à nos CGU
              et notre charte communautaire, chaque membre de la communauté
              s’engage formélement à ne pas expédier ou transporter de produits
              ilicites, sous peine de poursuites.
            </p>
          </details>
          <details>
            <summary>Puis-je livrer des colis à temps plein ?</summary>
            <p>
              La livraison de colis entre particuliers ne peut être considérée
              comme un travail à temps plein. Il s’agit d’un moyen vous
              permettant d’amortir vos frais de déplacements, et ainsi arrondir
              vos fins de mois. En aucun cas cela ne peut remplacer une activité
              salariale.{" "}
            </p>
          </details>
          <details>
            <summary>
              Dois-je déclarer l'argent perçu grâce à mes livraisons ?
            </summary>
            <p>
              Tant que les rétributions perçues n’excédent pas les coûts réels
              de vos frais de déplacements, et qu’une partie de ces frais reste
              à votre charge, cela n’est pas considéré comme un revenu
              d’activité. Toutefois les livreurs sont tenus de se renseigner et
              de s’assurer d’être en conformité avec les obligations fiscales
              les concernant, et de déclarer le cas échéant les revenus générés
              via la plateforme FastService :
              https://www.impots.gouv.fr/portail/node/10841 Chaque membre
              livreur se doit également de se renseigner sur ses obligations
              sociales :
              https://www.urssaf.fr/portail/home/espaces-dedies/activites-relevant-de-leconomie.html
            </p>
          </details>
        </div>

        <div className="btn-faq">
          <Button labelButton="Commencer à livrer" design="red" />
        </div>
      </div>
      <div className="section3-faq">
        <h2 className="h2-faq">
          Comment fonctionne la plateforme de livraison de colis FastService ?
        </h2>
        <div className="line"></div>
        <details>
          <summary>Quel est le rôle de FastService ?</summary>
          <p>
            FastService est une plateforme de livraison de colis entre
            particuliers. Il s’agit d’un système collaboratif qui met en
            relation des particuliers qui souhaitent faire des économies sur
            leurs envois de colis ou sur leurs frais de déplacements.
            FastService joue donc un rôle d’intermédiaire dans la mise en
            relation et assure la sécurité de chaque transaction (plateforme de
            paiement sécurisé, vérification des comptes des utilisateurs,
            contrôle des annonces, …).
          </p>
        </details>
        <details>
          <summary>
            Suis-je obligé(e) de m'inscrire pour utiliser FastService ?
          </summary>
          <p>
            Oui vous devrez vous créer un compte pour utiliser FastService mais
            rassurez-vous, cela ne prend que quelques secondes !
          </p>
        </details>
        <details>
          <summary>
            Pourquoi dois-je fournir une pièce d'identité, un RIB et un
            justificatif de domicile ?
          </summary>
          <p>
            Dans votre compte dans l’onglet « Mes données bancaires » vous devez
            fournir votre pièce d’identité (ou passeport), un RIB et un
            justificatif de domicile à votre nom. Ces documents sont essentiels
            à la validation de votre compte et à la vérification de l’identité
            de tous les membres livreurs de la plateforme FastService. Cette
            sécurité permet à la plateforme de proposer un service basé sur la
            confiance. Cela nous permet aussi d’assurer à nos membres que chaque
            transaction est réalisée par des livreurs identifiés, et de
            confiance. De plus, vous ne pourrez recevoir l’argent de vos
            livraisons sur votre compte bancaire qu’un fois ces documents
            validés.
          </p>
        </details>
        <details>
          <summary>
            Peut-il y avoir des livreurs professionnels qui proposent leurs
            services ?
          </summary>
          <p>
            FastService a été conçu pour de la mise en relation entre
            particuliers. La plateforme n’est donc pas adaptée pour les
            professionnels.{" "}
          </p>
        </details>
        <details>
          <summary>
            Il y a-t-il une assurance proposée sur FastService ?
          </summary>
          <p>
            Nous ne proposons pas d’assurance sur les colis transportés. Les
            colis sont sous la responsabilité des livreurs. L’expéditeur doit
            toutefois s’assurer que son colis est bien protégé avant de le faire
            transporter. A ce jour nous n’avons pas rencontré d’incident de
            livraison.
          </p>
        </details>
        <div className="btn-faq">
          <Button labelButton="J'y vais !" design="blue" />
        </div>
      </div>
      <div className="section4-faq">
        <h3>Une question ?</h3>
        <p>
          Vous n’avez pas trouvé votre réponse concernant la plateforme de
          livraison de colis ? Vous avez besoin de précisions sur un point ?
          Ecrivez-nous à contact@FastService.com ou remplissez le formulaire ci
          contre, nous vous répondrons dans les plus brefs délais.
        </p>
        <input type="email" placeholder="Adresse e-mail" />
        <textarea
          rows="10"
          cols="40"
          maxLength="400"
          placeholder="Votre message - 400 caractères max"
          onChange={totalCharacterCount}
        />
        <div className="total-character">{totalCharacter.length}/400</div>
      </div>
      <div className="btn-faq">
        <Button labelButton="Envoyer" design="red" />
      </div>
    </div>
  );
}
