import React from "react";
import Image from "../../compoments/news/image";
import Menu from "../../components/menu";
import News_Majeur from "../../components/news/news_majeur";
import 'bootstrap/dist/css/bootstrap.min.css';
import Autre_News from "../../components/news/autre_news";

function Main(){
    return (
        <>
        <Image />
        <Menu />
        <News_Majeur />
        <Autre_News />
        </>
    );
}
export default Main;