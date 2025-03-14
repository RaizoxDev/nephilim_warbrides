import React from "react";
import Image from "../../components/home/image";
import Slider from "../../components/home/slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "../../components/menu";
import Copyright from "../../components/copyright";
import Youtube from "../../components/home/video";

function Main(){
    return (
        <>
        <Image />
        <Menu />
        <Youtube />
        <Slider />
        <Copyright />
        </>
    );
}
export default Main;