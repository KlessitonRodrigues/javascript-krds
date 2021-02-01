const Calendar = {
    date: new Date(),
    month: document.querySelector('.month-name'),
    year: document.querySelector('.month-year'),
    days: document.querySelectorAll('.day'),
    setCalendarDate() {
        this.month.innerHTML = this.monthNameString(this.date.getMonth())
        this.year.innerHTML = this.date.getFullYear()
        this.setCalendarDays(this.date)
    },
    setMonth(num) {
        this.date.setMonth(this.date.getMonth() + num)
        this.setCalendarDate()
    },
    setTargetDate(day) {
        this.date.setDate(Number(day))
    },
    getStartDayWeek(date) {
        const countDate = new Date(date)
        countDate.setDate(1)
        return countDate.getDay()
    },
    setCalendarDays(date) {
        const countDate = new Date("2020/01/01")
        countDate.setFullYear(date.getFullYear())
        countDate.setMonth(date.getMonth())
        const startDayWeek = this.getStartDayWeek(countDate)

        this.days.forEach((value, index) => { this.days[index].innerHTML = "" })

        for (let i = 1; countDate.getMonth() === date.getMonth() && i <= 31; i++) {
            countDate.setDate(countDate.getDate() + 1)
            this.days[startDayWeek + i - 1].innerHTML = i
        }
    },
    monthNameString(num) {
        const monthString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
            "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
        ]
        return num >= 0 && num <= 11 ? monthString[num] : "no month"
    }
}

Calendar.setCalendarDate()

const todoDay = document.querySelector('.todo-day span')

$(document).ready(() => {
    // .PREV and .NEXT buttons
    $(".prev.button").click(() => {
        Calendar.setMonth(-1)
    })
    $(".next.button").click(() => {
        Calendar.setMonth(1)
    })
    // Sets day cliked as active
    $(Calendar.days).click(dayActive)

    $(".todo-add").click(() => {
        $(".todo-form").css({
            "visibility": "visible",
            "display": "block"
        })
    })
})

function dayActive() {
    const element = document.querySelector('.day.active')
    if (element !== null) {
        const currentClass = element.getAttribute('Class')
        element.setAttribute('Class', currentClass.replace('active', ''))
    }
    this.setAttribute('Class', this.getAttribute('class') + ' active')
    setTodoDay(this.innerHTML, Calendar.month.innerHTML, Calendar.year.innerHTML)
    Calendar.setTargetDate(this.innerHTML)
}

function setTodoDay(day, month, year) {
    $(".todo").css({
        "visibility": "visible",
        "display": "block"
    })
    todoDay.innerHTML = `${day} de ${month} de ${year}`;
    //$(".todo-day span").text(``)
}

function toDay() {
    const nowDate = new Date()
    const nowDay = Calendar.days[Calendar.getStartDayWeek(nowDate) + nowDate.getDate() - 1]
    $(nowDay).attr("class", `${nowDay.getAttribute("Class")} active now`)
    //nowDay.setAttribute('Class', nowDay.getAttribute('Class') + ' active now')
}

toDay()