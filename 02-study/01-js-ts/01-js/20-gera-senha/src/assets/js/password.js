export default function (options) {
    const { limit, number, lowCase, upCase, special } = options
    const pass = []
    const dic = {
        numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        chars: ["a", "b", "c", "d", "e", "f", "g", "h",
            "i", "j", "l", "k", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z",],
        special: ["@", "!", "+", "-", "_", "?", "#"]
    }

    if (
        (limit <= 0) ||
        !(number || lowCase || upCase || special))
        return "Selecione a opção"

    while (pass.length < limit) {
        if (number) pass.push((dic.numbers[rand(0, 9)]))
        if (lowCase) pass.push((dic.chars[rand(0, 25)]))
        if (upCase) pass.push((dic.chars[rand(0, 25)].toUpperCase()))
        if (special) pass.push((dic.special[rand(0, 6)]))
    }

    return pass.slice(0, limit).join("")
}

function rand(min = 0, max = 1) {
    return Math.round(
        Math.random() * (max - min) + min
    )
}