import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Autre_Contacts() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h1>Support</h1>
                    </div>
                    <div>
                        <div className="col-12 text-center">
                            <label>
                                <div>
                                    Pseudo
                                </div>
                                <input name="username" style={{width: 350}} />
                            </label>
                            <br />
                            <label>
                                <div>
                                    Email
                                </div>
                                <input name="email" style={{width: 350}} />
                            </label>
                            <hr />
                            <p className="form-box">
                                Problème:
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Problème de Compte" />
                                        Problème de Compte
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Problème de Launcher" />
                                        Signaler un bug
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Problème de Téléchargement" />
                                        Problème de Téléchargement
                                    </label>
                                </div>
                            </p>
                            <hr />
                                <label>
                                    <div>
                                        Description du problème
                                    </div>
                                        <input name="description" style={{width: 500, height: 300}}/>
                                </label>
                                <div>
                                    <button style={{marginTop: 10}}>Envoyer</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Autre_Contacts;