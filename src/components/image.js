import React from "react";
import logo from "../../src/components/logo.png";

function Image(){
    return (
        <div className="col-12" id="DivTotal">
          <p>Nephilim Warbrides</p>
          <img id="Image" src={logo} alt="Logo" width="250" height="250" />
        </div>
      );
    }

export default Image;