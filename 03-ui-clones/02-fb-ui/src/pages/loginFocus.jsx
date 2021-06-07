import React from "react"

import Login from "../components/loginForm"

export default () => (
    <div className="home page login-focus">
        <div className="flex">
            <header>
                <img
                    className="fb-logo img"
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt="Facebook" />
            </header>

            <main>
                <Login />
            </main>
        </div>
        <footer>
            Português (Brasil) <a>English (US)</a>
            <hr />
            <div className="options-links">
                Cadastre-se Entrar Messenger Facebook LiteWatch Pessoas
                Páginas Categorias de Página Locais Jogos Locais
                Marketplace Facebook PayGrupos Vagas de emprego Oculus
                Portal Instagram Local Campanhas de arrecadação de fundos
                ServiçosCentral de Informações de Votação Sobre
                Criar anúncio Criar Página Desenvolvedores Carreiras
                Privacidade Cookies Escolhas para anúncios
                Termos Ajuda Configurações
            </div>
            <hr />
            Facebook 2021
        </footer>
    </div>
)