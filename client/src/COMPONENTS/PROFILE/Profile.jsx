import React, { useState } from "react";
import "./Profile.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Avatar from "../../assets/IMG/avatar.png";
import BUTTON from "../BUTTON/Button";

export default function Profile() {
  const [phoneValue, setPhoneValue] = useState("");
  console.log(phoneValue);
  return (
    <div className="profile-admin">
      <div className="avatar">
        <img src={Avatar} alt="avatar" className="avatar-profile" />
      </div>
      <div className="personal-data">
        <h1>Mes données personnelles</h1>
        <form action="#" method="get" className="form-profile">
          <label htmlFor="name" className="entity">
            Nom
          </label>
          <input type="text" className="input-profile" />
          <label htmlFor="surname" className="entity">
            Prénom
          </label>
          <input type="text" className="input-profile" />
          <label htmlFor="dateOfBirth" className="entity">
            Date de naissance
          </label>
          <input type="date" className="input-profile" />
          <label htmlFor="email" className="entity">
            Email
          </label>
          <input type="email" className="input-profile" />
          <label htmlFor="phone" className="entity">
            Téléphone
          </label>
          <PhoneInput
            placeholder="+32"
            defaultCountry="BE"
            value={phoneValue}
            onChange={setPhoneValue}
            className="input-profile"
          />
          <label htmlFor="street" className="entity">
            Rue
          </label>
          <input type="text" className="input-profile" />
          <label htmlFor="number" className="entity">
            N°
          </label>
          <input type="number" className="input-profile" />
          <label htmlFor="postalCode" className="entity">
            Code postal
          </label>
          <input type="number" className="input-profile" />
          <label htmlFor="locality" className="entity">
            Localité
          </label>
          <input type="text" className="input-profile" />
          <label htmlFor="country" className="entity">
            Pays
          </label>
          <input type="text" className="input-profile" />
          <label htmlFor="avatar" className="entity">
            Votre avatar
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="avatar-upload"
          />
        </form>
        <div className="btn-password-profile">
          <BUTTON
            labelButton="Changer de mot de passe"
            design="orange"
            path="/"
            btnContainer="container-btn-xs"
          />
          <BUTTON
            labelButton="Supprimer mon compte"
            design="red"
            path="/"
            btnContainer="container-btn-xs"
          />
        </div>
      </div>
      <div className="deliverer-data">
        <h1>Mes données transporteur</h1>
        <form action="#" method="get" className="form-profile">
          <label htmlFor="identity-card" className="entity">
            Carte d'identité
          </label>
          <input type="file" accept="image/png, image/jpeg" />
          <label htmlFor="driving-license" className="entity">
            Permis de conduire
          </label>
          <input type="file" accept="image/png, image/jpeg" />
        </form>
        <div className="vehicle">
          <div className="title-add">
            <h3>Mes véhicules</h3>
            <i class="fa-solid fa-plus"></i>
          </div>
          <table className="list-vehicle">
            <thead>
              <th>Marque</th>
              <th>Modèle</th>
              <th>Plaque</th>
              <th>Capacité</th>
            </thead>
            <tbody>
              <td>Mercedes</td>
              <td>Vito</td>
              <td>1-GHG-257</td>
              <td>420L</td>
            </tbody>
            <tbody>
              <td>Peaugeot</td>
              <td>306</td>
              <td>1-GHG-258</td>
              <td>140L</td>
            </tbody>
            <tbody>
              <td>Citroën</td>
              <td>DS4</td>
              <td>1-GHG-259</td>
              <td>45L</td>
            </tbody>
            <tbody>
              <td>Citorën</td>
              <td>Jumper</td>
              <td>1-GHG-256</td>
              <td>650L</td>
            </tbody>
            <tbody>
              <td>Mercedes</td>
              <td>Vito</td>
              <td>1-GHG-257</td>
              <td>420L</td>
            </tbody>
            <tbody>
              <td>Peaugeot</td>
              <td>306</td>
              <td>1-GHG-258</td>
              <td>140L</td>
            </tbody>
            <tbody>
              <td>Citroën</td>
              <td>DS4</td>
              <td>1-GHG-259</td>
              <td>45L</td>
            </tbody>
            <tbody>
              <td>Citorën</td>
              <td>Jumper</td>
              <td>1-GHG-256</td>
              <td>650L</td>
            </tbody>
          </table>
        </div>
        <div className="way">
          <div className="title-add">
            <h3>Mes trajets</h3>
            <i class="fa-solid fa-plus"></i>
          </div>
          <table className="list-way">
            <thead>
              <th>Destination</th>
              <th>Date</th>
              <th>Véhicule</th>
            </thead>
            <tbody>
              <td>Liège</td>
              <td>15/01/2022</td>
              <td>Vito</td>
            </tbody>
            <tbody>
              <td>Bruxelles</td>
              <td>18/01/2022</td>
              <td>Jumper</td>
            </tbody>
            <tbody>
              <td>Arlon</td>
              <td>12/01/2022</td>
              <td>DS4</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
