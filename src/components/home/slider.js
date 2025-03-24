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
    <div className="container" id="slider-container">
      <div className="row">
        <h2 className="text-center">MMORPG 100% FR</h2>
        <div className="col-6">
            <Carousel>
              {ImageSlider.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="img-fluid" src={image.url} alt={`Slide ${index + 1}`} />
                  <Carousel.Caption>
                  <h5 className="py-6">{image.title}</h5>
                  <p>{image.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
        <div className="col-6" id="histoire">
        <h3 className="text-center">Histoire</h3>
        <h4 className="text-center">Histoire de fou malade, wowowowow trop cool !</h4>
        </div>
      </div>
      <div className="row">
        <h2 className="text-center" id="titre-2">Fonctionnalité du jeu:</h2>
        <div className="col-3" id="case-1">
        <h3 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Classes</h3>
        <h4 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Classes</h4>
        </div>
        <div className="col-3" id="case-2">
        <h3 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Craft</h3>
        <h4 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Crafts</h4>
        </div>
        <div className="col-3" id="case-3">
        <h3 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Donjons</h3>
        <h4 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Donjons</h4>
        </div>
        <div className="col-3" id="case-4">
        <h3 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Guildes</h3>
        <h4 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Guildes</h4>
        </div>
      </div>
    </div>
  );
}
export default Slider;