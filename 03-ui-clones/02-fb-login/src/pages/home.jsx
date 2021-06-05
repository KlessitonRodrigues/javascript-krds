import React from "react"

import Login from "../components/loginForm"

export default () => (
    <div className="home page">
        <header>
            <div>
                <img
                    className="fb-logo img"
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt="Facebook" />

            </div>
            <h2>
                O Facebook ajuda você a se conectar e
                compartilhar com as pessoas que fazer
                parte da sua vida.
            </h2>
        </header>
        <Login />
        <div>
            <span>
                <strong>Crie uma página</strong> para uma celebridade,
                banda ou empresa.
            </span>
        </div>
    </div>
)