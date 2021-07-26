import { makeAutoObservable, observable, action, computed } from "mobx"

class dashboardStore {
    counters = {
        counter1: 0,
        counter2: 1,
        counter3: 4
    }

    constructor() {
        makeAutoObservable(this, {
            counters: observable,
            incCounter: action,
            decCounter: action,
            sum: computed
        })
    }

    incCounter = number =>
        this.counters["counter" + number]++
        
    decCounter = number =>
        this.counters["counter" + number]--

    get sum() {
        return this.counter1 + this.counter2 + this.counter3
    }
}

export default new dashboardStore()