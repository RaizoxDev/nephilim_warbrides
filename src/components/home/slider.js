import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button} from "react-bootstrap";

function Slider() {
  const ImageSlider = [
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Premier Slide",
      description: "Description de la premier slide.",

    },
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Deuxième Slide",
      description: "Description de la deuxième slide.",
    },
    {
      url: "https://jolstatic.fr/www/captures/549/7/6157.jpg",
      title: "Troisième Slide",
      description: "Description de la troisième slide.",
    },
  ];

  return (
    <div className="container" style={{ backgroundColor: "#9D9797" }}>
      <div className="row">
        <h1 className="text-center" id="titre-1">MMORPG 100% FR</h1>
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
          <h2 className="text-center">Histoire</h2>
          <h4 className="text-center">Histoire de fou malade, wowowowow trop cool !</h4>
        </div>
      </div>
      <div className="row">
        <h1 className="text-center" id="titre-2">Fonctionnalité du jeu:</h1>
        <div className="col-3" id="case-1">
        <h5 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Classes</h5>
        <h5 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Classes</h5>
        </div>
        <div className="col-3" id="case-2">
          <h5 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Craft</h5>
          <h5 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Craft</h5>
        </div>
        <div className="col-3" id="case-3">
        <h5 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Donjons</h5>
        <h5 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Donjons</h5>
        </div>
        <div className="col-3" id="case-4">
        <h5 className="text-center cursor-pointer" style={{cursor: "pointer", color: "#000000"}}>Guildes</h5>
        <h5 className="py-2 cursor-pointer" onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l")} style={{ cursor: "pointer", color: "#4d81cb" }}>Explication des Guildes</h5>
        </div>
      </div>
    </div>
  );
}
export default Slider;