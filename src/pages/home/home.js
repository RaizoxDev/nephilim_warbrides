import React from "react";
import Image from "../../components/home/image";
import Slider from "../../components/home/slider/slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from "../../components/home/menu";

function Main(){
    return (
        <>
        <Image />
        <NavBar1 />
        <Slider />
        </>
    );
}
export default Main;