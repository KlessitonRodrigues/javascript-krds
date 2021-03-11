import React from "react"

let Button = props => {

    let btnType = ""

    if (props.label === "Del") {
        btnType = " btn-delete"
    } else if (props.label === "AC") {
        btnType = " btn-clear"
    } else if (/\d/.test(props.label)) {
        btnType = " btn-digit"
    } else if (/\D/.test(props.label)) {
        btnType = " btn-operator"
    }

    return (
        <button className={"calc-btn" + btnType}>
            {props.label}
        </button>
    )
}
export default Button 