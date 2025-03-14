import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function News_Majeur(){
    const history = useHistory();
        <img src={item.img} onChange={() => history.push(item.targetURL)}/>

    const ImageSlider = [{
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Première News",
        description: "Description de la première news.",
        targetURL: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l"
    },
    {
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Deuxième News",
        description: "Description de la deuxième news.",
        targetURL: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l"
    },
    {
        url: "https://images.nightcafe.studio/jobs/a0pXHZ9dav0u9IKgkAJp/a0pXHZ9dav0u9IKgkAJp--0--m3ch2.jpg?tr=w-1600,c-at_max",
        title: "Troisième News",
        description: "Description de la troisième news.",
        targetURL: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l"
    },
    ];
    return(
        <div className="container" style={{ backgroundColor: "#9D9797" }}>
        <div className="row">
            <h1 className="text-center" id="titre-1">News Majeur</h1>
        <div className="col-1">    
        <div className="col-10">
        <div className="col-1">
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
        </div>
        </div>
        </div>
        </div>
    );
}
export default News_Majeur;