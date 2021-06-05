import React from "react"
import { Link } from "react-router-dom"

export default () => (
    <div className="login-form">
        <form>
            <input type="text" placeholder="Email ou Telefone" />
            <input type="password" placeholder="Senha" />
            <button type="button" className="sigin">Entrar</button>
            <Link to="/loginPage">Esqueceu a senha?</Link>
            <hr />
            <button type="button" className="sigup">Criar nova conta</button>
        </form>
    </ div>
)