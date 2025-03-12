import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function Slider() {
  const ImageSlider = [
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Premier Slide",
      description: "Description du premier slide.",
    },
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Deuxième Slide",
      description: "Description du deuxième slide.",
    },
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Troisième Slide",
      description: "Description du troisième slide.",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel>
        {ImageSlider.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="carousel-image" src={image.url} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default Slider;