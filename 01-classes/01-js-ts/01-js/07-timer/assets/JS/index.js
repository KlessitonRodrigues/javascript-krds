const timerHH = document.querySelector(".clock-timer-hh")
const timerMM = document.querySelector(".clock-timer-mm")
const timerSS = document.querySelector(".clock-timer-ss")
const timerMS = document.querySelector(".clock-timer-ms")

const timer = {
    clock: { HH: "00", MM: "00", SS: "00", MS: "00" },
    timerRun: false,
    intervalId: 0,

    setTimer() {
        if (this.clock.MS === 99) {
            this.clock.SS++
            this.clock.MS = "00"
            if (this.clock.SS < 10)
                this.clock.SS = "0" + this.clock.SS
        }
        if (this.clock.SS === 60) {
            this.clock.MM++
            this.clock.SS = "00"
            if (this.clock.MM < 10)
                this.clock.MM = "0" + this.clock.MM
        }
        if (this.clock.MM === 60) {
            this.clock.hh++
            this.clock.MM = "00"
            if (this.clock.HH < 10)
                this.clock.HH = "0" + this.clock.HH
        }

        timerHH.innerHTML = this.clock.HH
        timerMM.innerHTML = this.clock.MM
        timerSS.innerHTML = this.clock.SS
        timerMS.innerHTML = this.clock.MS

        this.clock.MS = Number(this.clock.MS)
    },

    startTimer() {
        this.timerRun = true
        this.intervalId = setInterval(() => {
            timerMS.innerHTML = ++this.clock.MS
            if (this.clock.MS === 99)
                this.setTimer()
        }, 10)
    },

    stopTimer() {
        clearInterval(this.intervalId)
        this.timerRun = false
    },

    resetTimer() {
        clearInterval(this.intervalId)
        this.timerRun = false
        for (key in this.clock) {
            this.clock[key] = "00"
        }
        this.setTimer()
    },
}

$(".clock-btn-start").click(() => {
    $(".clock-timer").css("color", "var(--blue-gray-100)")
    if (timer.timerRun) {
        timer.stopTimer()
        $(".clock-btn-start").text("start")
    } else {
        timer.startTimer()
        $(".clock-btn-start").text("pause")
    }
})

$(".clock-btn-reset").click(() => {
    $(".clock-btn-start").text("start")
    $(".partial-time").html("")
    timer.resetTimer()
})

$(".clock-btn-partial").click(() => {
    if (timer.timerRun) {
        $(".partial-time").html((index, oriText) => {
            console.log(index, oriText);
            return oriText + `<br>
        ${timer.clock["HH"]}:
        ${timer.clock["SS"]}:
        ${timer.clock["MS"]}`
        })
    }
})