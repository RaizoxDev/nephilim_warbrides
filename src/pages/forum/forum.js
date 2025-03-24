import React from "react";
import Image from "../../components/image";
import Menu from "../../components/menu";
import Posts from "../../components/forum/posts";
import Copyright from "../../components/copyright";

function Forum(){
    return (
        <>
        <Image />
        <Menu />
        <Posts />
        <Copyright />
        </>
    );
}
export default Forum;