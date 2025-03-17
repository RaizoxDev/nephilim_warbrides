import React from "react";
import Image from "../../components/image";
import Menu from "../../components/menu";
import News_Majeur from "../../components/news/news_majeur";
import 'bootstrap/dist/css/bootstrap.min.css';
import Autre_News from "../../components/news/autre_news";
import Copyright from "../../components/copyright";

function News(){
    return (
        <>
        <Image />
        <Menu />
        <News_Majeur />
        <Autre_News />
        <Copyright />
        </>
    );
}
export default News;