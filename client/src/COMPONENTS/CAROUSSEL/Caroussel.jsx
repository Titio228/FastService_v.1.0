import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Caroussel.css";

export default function Caroussel() {
  const dataComment = [
    {
      id: 1,
      comment: "Bonjour c'est un site super",
      stars: 2,
    },
    {
      id: 2,
      comment: "Génial, je le recommande",
      stars: 3,
    },
    {
      id: 3,
      comment: "Je dis bravo aux développeurs",
      stars: 3,
    },
    {
      id: 4,
      comment: "Bonjour à Mr. Martel ;-)",
      stars: 5,
    },
    {
      id: 5,
      comment: "J'ai réussi mon caroussel",
      stars: 1,
    },
  ];

  const DisplayStars = (number) => {
    const numberStars = Array.from({ length: number }, () => (
      <i key={dataComment.id} class="fa-solid fa-star"></i>
    ));

    return numberStars;
  };

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      className="caroussel"
    >
      {dataComment.map((e) => (
        <div key={e.id}>
          <p className="para-carousel">{e.comment}</p>
          {DisplayStars(e.stars)}
          <div className="space"></div>
        </div>
      ))}
    </Carousel>
  );
}
