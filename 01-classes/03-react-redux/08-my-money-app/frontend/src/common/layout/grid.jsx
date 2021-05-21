import React from "react"

export default props => {
    const cols = toCssClasse(props.cols)
    return (
        <div className={cols}>
            {props.children}
        </div>
    )
}

function toCssClasse(numbers) {
    const cols = numbers ? numbers.split(" ") : [12]
    let cssCols = ""

    if (cols[0]) cssCols += `col-xs-${cols[0]}`
    if (cols[1]) cssCols += ` col-sm-${cols[1]}`
    if (cols[2]) cssCols += ` col-md-${cols[2]}`
    if (cols[3]) cssCols += ` col-lg-${cols[3]}`
    return cssCols
}