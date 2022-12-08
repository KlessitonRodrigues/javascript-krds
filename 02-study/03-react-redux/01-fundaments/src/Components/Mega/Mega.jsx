import React from "react"

const Mega = _ => {
    const megaArr = []

    while (megaArr.length < 7) {
        const random = parseInt(
            Math.random() * 59 + 1)
            
        !megaArr.includes(random) && megaArr.push(random)
    }

    megaArr.sort((a, b) => a - b)

    const megaNumbers = megaArr.map(item => (
        <span
            className="mega-item"
            key={item.toString()}
        >{item}</span>
    ))

    return (
        <div className="mega-numbers">
            {megaNumbers}
        </div>
    )
}

export default Mega