(() => {
    let cardList = []

    function getFormData() {
        const form = document.querySelector("#form")
        const title = form.querySelector("#titleField").value
        const text = form.querySelector("#textField").value
        let type
        document.getElementsByName("btn-radio").forEach(element => {
            if (element.checked) type = element.value
        })
        if (!(title && text)) return alert("Preencha os campos vazios!")
        return { title, text, type };
    }

    function newCard(card, index) {
        const id = index + 1
        let newCard = document.createElement("div")
        newCard.classList = `card col-s6-m4-l3 ${card.type}`
        newCard.innerHTML =
            `
            <div class="nowrap-items">
            <h3><b class="card-count ">${id}</b></h3>
            <h4><b class="card-header">${card.title}</b></h4>
            <img class="btn-trash" src="img/delete.png">
            </div>
            <p class="card-body">${card.text}</p>
            <h6 class="card-type">${card.type}</h6>
            `
        return newCard
    }

    function rederCards() {
        const cardsSection = document.querySelector(".cards-section")
        cardsSection.innerHTML = ""

        if (!cardList.length) {
            cardsSection.style.visibility = "hidden";
            return
        }
        cardsSection.style.visibility = "visible";

        cardList.forEach((value, index) => {
            const card = newCard(value, index)
            document.querySelector(".cards-section").appendChild(card)
        })
        addBtnTrashEvent()
    }

    function setStorage() {
        const local = cardList.filter(value => value.type === "local")
        const session = cardList.filter(value => value.type === "session")
        if (local) localStorage.setItem("cards", JSON.stringify(local))
        if (session) sessionStorage.setItem("cards", JSON.stringify(session))
        rederCards()
    }

    function getStorage() {
        const data = JSON.parse(localStorage.getItem("cards"))
        if (data !== null) cardList = data
        rederCards()
    }

    function btnSave() {
        const data = getFormData()
        if (data) {
            cardList.push(data)
            setStorage()
        }
    }

    function btnClear() {
        if (!confirm("Deseja apagar todos?")) return
        cardList = []
        setStorage()
    }

    function btnTrash(e) {
        if (!confirm("Deseja Apagar?")) return;
        const targetParent = e.target.parentElement.parentElement
        const cardCount = targetParent.querySelector(".card-count").innerHTML
        cardList.splice(Number(cardCount) - 1, 1)
        setStorage()
    }

    function addBtnTrashEvent() {
        const btnTrashList = document.querySelectorAll(".btn-trash")
        if (!btnTrashList.length) return;
        btnTrashList.forEach(element => {
            element.addEventListener("click", btnTrash)
        })
    }

    document.querySelector(".btn-save").addEventListener("click", btnSave)

    document.querySelector(".btn-clear").addEventListener("click", btnClear)

    form.addEventListener("submit", e => e.preventDefault())

    getStorage()
})();