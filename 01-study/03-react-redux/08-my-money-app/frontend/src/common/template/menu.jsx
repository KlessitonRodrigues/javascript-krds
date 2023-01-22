import React from "react"
import MenuItem from "./menuitem"
import Menutree from "./menutree"

export default props => (
    <ul className="sidebar-menu">
        <MenuItem label="Dashboard" path="#/" icon="dashboard" />
        <Menutree label="Cadastro" icon="edit">
            <MenuItem
                label="Ciclo de Pagamento"
                path="#billingCycles"
                icon="usd" />
        </Menutree>
    </ul>
)