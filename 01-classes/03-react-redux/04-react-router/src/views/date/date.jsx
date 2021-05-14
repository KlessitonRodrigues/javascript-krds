import React from "react"
import "./date.css"

const DateComponent = () => {
    let date = new Date()
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    const dateStr = date
        .toLocaleDateString("pt-BR", dateOptions)

    return (
        <div className="date">
            <span>
                {dateStr}
            </span>
        </div>
    )
}

export default DateComponent