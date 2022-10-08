import React from "react"

import Login from "../components/loginForm"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

export default () => (
    <div className="home page login-focus">
        <div className="flex">
            <header>
                <Link to="/">
                    <img
                        className="fb-logo img"
                        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                        alt="Facebook" />
                </Link>
            </header>

            <main>
                <Login />
            </main>
        </div>
        <Footer />
    </div>
)