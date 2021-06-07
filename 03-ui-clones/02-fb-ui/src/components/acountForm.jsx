import React from "react"

function dateOptions(type) {
    const selectOptions = []
    const monthsName = ["Jan", "Fev", "Mar", "Abr", "Mai",
        "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    if (type === "days") {
        let i = 1
        while (i <= 31) {
            selectOptions.push(
                <option key={i} value="i">{i}</option>)
            ++i
        }
    }

    if (type === "months")
        monthsName.map(month =>
            selectOptions.push(
                <option key={month} value="month">{month}</option>)
        )

    if (type === "years") {
        let i = 2021
        while (i >= 1905) {
            selectOptions.push(
                <option key={i} value="i">{i}</option>)
            --i
        }
    }

    return selectOptions
}


export default ({ display, setDisplay }) => (
    <div style={{ display: display ? "" : "none" }}>
        <div className="cover" />
        <div className="frame" >
            <form className="acount-form">
                <button
                    className="close-btn"
                    onClick={() => setDisplay(false)}>&times;</button>
                <h1>Cadastre-se</h1>
                <span>É rápido e fácil.</span>
                <hr />
                <div className="flex">
                    <input type="text" placeholder="Nome" required />
                    <input type="text" placeholder="Sobrenome" required />
                </div>
                <input type="text" placeholder="Celular ou Email" required />
                <input type="text" placeholder="Nova Senha" required />
                <small>Data de nascimento</small>
                <div className="selection-group">
                    <select>
                        {dateOptions("days")}
                    </select>
                    <select>
                        {dateOptions("months")}
                    </select>
                    <select>
                        {dateOptions("years")}
                    </select>
                </div>
                <small>Gênero</small>
                <div className="radio-group">
                    <label>
                        Masculino
                    <input name="gener" type="radio" />
                    </label>
                    <label>
                        Feminino
                    <input name="gener" type="radio" />
                    </label>
                    <label>
                        Personalizado
                    <input name="gener" type="radio" />
                    </label>
                </div>
                <span className="politics">
                    Ao clicar em Cadastre-se, você concorda
                    com nossos <a>Termos</a>, <a>Política de Dados</a>
                    e <a>Política de Cookies</a>. Você poderá receber
                    notificações por SMS e cancelar isso quando
                    quiser.
                </span>
                <div className="submit-btn-container">
                    <button>Cadastre-se</button>
                </div>
            </form>
        </div>
    </div>
)