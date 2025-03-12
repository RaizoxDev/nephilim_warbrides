import React from "react";
import Image from "../../components/home/image";
import Slider from "../../components/home/slider/slider";
import Menu from "../../components/home/menu";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main(){
    return (
        <>
        <Image />
        <Menu />
        <Slider />
        </>
    );
}
export default Main;