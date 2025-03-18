import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Autre_News() {
    return (
        <>
            <div className="text-center">
                <h1>Support</h1>
            </div>
            <div className="text-center" style={{ backgroundColor: "#9D9797" }}>
                <label>
                    Pseudo
                    <input name="username" />
                </label>
                <hr />
                <label>
                    Email
                    <input name="email" />
                </label>
                <hr />
                <p>
                    Problème:
                    <label>
                        Problème de Compte
                        <input type="radio" name="problème" value="Problème de Compte" />
                    </label>
                    <label>
                        Signaler un bug
                        <input type="radio" name="problème" value="Problème de Launcher" />
                    </label>
                    <label>
                        Problème de Téléchargement
                        <input type="radio" name="problème" value="Problème de Téléchargement" />
                    </label>
                </p>
            </div>
        </>
    );
}

export default Autre_News;