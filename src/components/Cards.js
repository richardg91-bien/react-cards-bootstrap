import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Richard Web",
    image: image1,
    url: "https://richardg91.ga",
  },
  {
    id: 2,
    title: "richardg91 Blog",
    image: image2,
    url: "",
  },
  {
    id: 3,
    title: "richardg91 Youtube",
    image: image3,
    url: "https://www.youtube.com/channel/UClxFeefYOwMGazuzmf4m3KQ",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
