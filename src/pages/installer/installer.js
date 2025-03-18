import React from "react";
import Image from "../../components/image";
import Menu from "../../components/menu";
import Prérequis from "../../components/installer/prerequis";
import Copyright from "../../components/copyright";

function Installer(){
    return (
        <>
        <Image />
        <Menu />
        <Prérequis />
        <Copyright />
        </>
    );
}
export default Installer;