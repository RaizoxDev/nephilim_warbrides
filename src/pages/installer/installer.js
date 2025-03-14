import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap";
import Menu from "../../components/menu";
import Installer2 from "../../components/installer/installe";
import Copyright from "../../components/copyright";

function Installer(){
    return (
        <>
        <Image />
        <Menu />
        <Installer2 />
        <Copyright />
        </>
    );
}
export default Installer;