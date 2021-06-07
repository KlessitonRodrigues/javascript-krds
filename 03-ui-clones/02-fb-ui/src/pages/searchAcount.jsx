import React from "react"
import { Link } from "react-router-dom"

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
                <button>Entar</button>
                <a>Esqueceu a conta?</a>
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
                <button>Cancelar</button>
                <button>Pesquisar</button>
            </form>
        </main>
    </div>
)