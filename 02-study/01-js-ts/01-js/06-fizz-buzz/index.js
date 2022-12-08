// biggest number
const biggestNumber = (num1, num2) => num1 > num2 ? num1 : num2
document.body.innerText = `${biggestNumber(50, 10)}`

// checks image orientation
const isLandscape = (width, height) => width >= height

document.body.innerHTML += `<br>${isLandscape(800, 600)}`

// FizzBuzz
function fizzBuzz(num = 0) {
    if (typeof num !== "number") return num
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
    if (num % 3 === 0) return "Fizz"
    if (num % 5 === 0) return "Buzz"
    return num
}

for (let i = 0; i <= 100; i++) {
    document.body.innerHTML += `<br> ${i} ${fizzBuzz(i)}`
}