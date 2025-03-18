import React from "react";
import Image from "../../components/image";
import Menu from "../../components/menu";
import Autre_Contacts from "../../components/support/autre_contacts"
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from "../../components/copyright";

function Support(){
    return (
        <>
        <Image />
        <Menu />
        <Autre_Contacts />
        <Copyright />
        </>
    );
}
export default Support;