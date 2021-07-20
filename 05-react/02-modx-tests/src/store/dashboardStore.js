import {makeAutoObservable, observable, computed,  action } from "mobx"

class dashboardStore {
    counter1 = 0
    counter2 = 2
    counter3 = 4

    constructor(){
        makeAutoObservable(this)
    }

    incCounter1 = () => this.couunter1++
    incCounter2 = () => this.couunter2++
    incCounter3 = () => this.couunter3++

    decCounter1 = () => this.counter1--
    decCounter2 = () => this.counter2--
    decCounter3 = () => this.counter3--

    get sum() {
        return this.counter1 + this.counter2 + this.counter3
    }
}

decorate(dashboardStore, {
    counter1: observable,
    counter2: observable,
    counter3: observable,
    incCounter1: action,
    incCounter2: action,
    incCounter3: action,
    decCounter1: action,
    decCounter2: action,
    decCounter3: action,
    sum: computed
})

export default new dashboardStore()