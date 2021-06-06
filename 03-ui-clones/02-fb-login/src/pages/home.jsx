import React from "react"

import Login from "../components/loginForm"

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
        <footer>
            Português (Brasil) <a>English (USA)</a>
            <hr />
            Cadastre-se Entrar Messenger Facebook LiteWatch Pessoas
            Páginas Categorias de Página Locais Jogos Locais 
            Marketplace Facebook PayGrupos Vagas de emprego Oculus
            Portal Instagram Local Campanhas de arrecadação de fundos
            ServiçosCentral de Informações de Votação Sobre
            Criar anúncio Criar Página Desenvolvedores Carreiras
            Privacidade Cookies Escolhas para anúncios
            Termos Ajuda Configurações
            <hr />
            Facebook 2021
        </footer>
    </div>
)