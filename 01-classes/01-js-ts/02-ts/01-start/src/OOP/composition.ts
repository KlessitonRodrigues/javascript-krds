export class Engine {
  private state: boolean = false;

  getState() {
    console.log(`Engine is ${this.state ? 'ON!' : 'OFF'}`);
  }

  on() {
    console.log('Engine is ON!');
    this.state = true;
  }

  off() {
    console.log('Engine is OFF!');
    this.state = false;
  }
}

export class veicle {
  private engine: Engine = new Engine();

  startEngine(): void {
    this.engine.on();
  }

  stopEngine(): void {
    this.engine.off();
  }

  verifyEngine(): void {
    this.engine.getState();
  }
}

const car = new veicle();

car.startEngine();
car.verifyEngine();
car.stopEngine();
