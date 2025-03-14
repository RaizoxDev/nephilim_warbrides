import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Autre_News(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-3" id="case-5" style={{backgroundColor: "#F51717"}}>
                    <div>Derniers posts</div>
                </div>
                <div className="col-9" id="case-6" style={{backgroundColor: "#3754E6"}}>
                    <div>Bug fixes</div>
                </div>
            </div>
        </div>
    );
}

export default Autre_News;