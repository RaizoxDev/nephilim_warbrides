import React from "react";

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
                                <input className="infoSupport" name="username" />
                            </label>
                            <br />
                            <label>
                                <div>
                                    Email
                                </div>
                                <input className="infoSupport" name="email" />
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
                                <div>
                                    <label>
                                        <input type="radio" name="problème" value="Autre Problème" />
                                        Autre Problème
                                    </label>
                                </div>
                            </p>
                            <hr />
                                <label>
                                    <div>
                                        Description du problème
                                    </div>
                                    <input name="description" className="inputSupport" />
                                </label>
                                <div>
                                    <button className="buttonSupport">Envoyer</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Autre_Contacts;