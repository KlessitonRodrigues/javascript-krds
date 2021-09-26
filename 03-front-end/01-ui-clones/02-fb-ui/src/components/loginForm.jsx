import React, { useState } from "react"
import { Link } from "react-router-dom"

import AcountForm from "./acountForm"

export default props => {
    const [showAcountForm, setShowAcountForm] = useState(false)

    return (
        <div className="login-form">
            <form>
                <input type="text" placeholder="Email ou Telefone" />
                <input type="password" placeholder="Senha" />
                <button type="button" className="sigin">Entrar</button>
                <Link to="/login/identify" className="link">
                    Esqueceu a senha?
                </Link>
                <hr />
                <button
                    type="button"
                    className="sigup"
                    onClick={() => setShowAcountForm(!showAcountForm)}>
                    Criar nova conta
                </button>
            </form>
            <AcountForm
                display={showAcountForm}
                setDisplay={setShowAcountForm} />
        </ div>
    )
}