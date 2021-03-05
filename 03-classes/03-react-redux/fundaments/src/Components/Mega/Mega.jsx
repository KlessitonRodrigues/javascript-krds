import React from "react"

const Mega = _ => {
    const megaArr = []

    while (megaArr.length < 7) {
        const random =
            Math.floor(Math.random() * 59 + 1)

        megaArr.every(item => item !== random) &&
            megaArr.push(random)
    }

    megaArr.sort((a, b) => a - b)

    const megaNumbers = megaArr.map(item => (
        <span>{item}<br /></span>
    ))

    return (
        <div className="mega-numbers">
            <span>{megaNumbers}</span>
        </div>
    )
}

export default Mega