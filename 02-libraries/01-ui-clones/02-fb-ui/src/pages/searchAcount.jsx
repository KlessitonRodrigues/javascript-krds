import React from "react"
import { Link } from "react-router-dom"

import Footer from "../components/footer"

export default () => (
    <div className="search page">
        <header>
            <Link to="/">
                <img
                    className="fb-logo img"
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt="Facebook" />
            </Link>
            <form>
                <input type="text" placeholder="Email ou telefone" />
                <input type="text" placeholder="Senha" />
                <button>
                    <Link to="/login">Entrar</Link>
                </button>
                <Link className="link" to="/login/identify">Esqueceu a conta?</Link>
            </form>
        </header>
        <main>
            <form>
                <h2>Encontre sua conta</h2>
                <hr />
                <span>
                    Insira seu email ou número de celular
                    para procurar a sua conta.
                </span>
                <input type="text" placeholder="Número de celular" />
                <hr />
                <div className="btn-group">
                    <button>
                        <Link to="/login">Cancelar</Link>
                    </button>
                    <button to="#" className="btn-search">
                        <Link to="#">Pesquisar</Link>
                    </button>
                </div>
            </form>
        </main>
        <Footer />
    </div>
)