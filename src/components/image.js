import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../components/logo.png";

function Image(){
    return (
        <div id="DivTotal">
          <p>Nephilim Warbrides</p>
          <img id="Image" src={logo} alt="Logo" width="250" height="250" />
        </div>
      );
    }

export default Image;