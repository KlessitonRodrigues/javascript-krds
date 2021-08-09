import React from "react"
import { Link } from "react-router-dom"

import Login from "../components/loginForm"
import Footer from "../components/footer"

export default () => (
    <div className="home page">
        <div className="flex">
            <header>
                <img
                    className="fb-logo img"
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt="Facebook" />
                <h2>
                    O Facebook ajuda você a se conectar e
                    compartilhar com as pessoas que fazem
                    parte da sua vida.
                </h2>
            </header>

            <main>
                <Login />
                <div className="login-footer">
                    <b>Crie uma página </b>
                    para uma celebridade, banda ou empresa.
                </div>
            </main>
        </div>
        <Footer />
    </div>
)