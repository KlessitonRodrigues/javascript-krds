const textContent = document.querySelector(".text-content")
const pTags = textContent.querySelectorAll("p")
const bodyStyles = getComputedStyle(document.body)
const bodyColor = bodyStyles.backgroundColor

for (const p of pTags) {
    p.style.backgroundColor = `${bodyColor}`
    p.style.color = `#FFF`
}