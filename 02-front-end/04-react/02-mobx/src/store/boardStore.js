import { makeAutoObservable, observable, action, computed } from "mobx";

class dashboardStore {
  counters = {
    counter1: 1,
    counter2: 2,
    counter3: 3,
  };

  constructor() {
    makeAutoObservable(this, {
      counters: observable,
      incCounter: action,
      decCounter: action,
      sum: computed,
    });
  }

  incCounter = (number) => this.counters["counter" + number]++;

  decCounter = (number) => this.counters["counter" + number]--;

  get sum() {
    return (
      this.counters.counter1 + this.counters.counter2 + this.counters.counter3
    );
  }
}

export default new dashboardStore();
