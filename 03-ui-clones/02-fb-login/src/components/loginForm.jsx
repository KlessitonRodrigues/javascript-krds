import React, { useState } from "react"
import { Link } from "react-router-dom"

import AcountForm from "./acountForm"

export default props => {
    const [showAcountForm, setShowAcountForm ] = useState(false)

    return (
        <div className="login-form">
            {console.log(showAcountForm, setShowAcountForm)}
            <form>
                <input type="text" placeholder="Email ou Telefone" />
                <input type="password" placeholder="Senha" />
                <button type="button" className="sigin">Entrar</button>
                <Link to="/loginPage">Esqueceu a senha?</Link>
                <hr />
                <button
                    type="button"
                    className="sigup"
                    onClick={() => setShowAcountForm(!showAcountForm)}>
                    Criar nova conta
            </button>
            </form>
            <AcountForm display={showAcountForm} />
        </ div>
    )
}