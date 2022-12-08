export class Employe {
  public readonly name: string;
  private readonly tasks: Task[] = []; // class as type
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}

class Task {
  // attributes at arguments
  constructor(public readonly name: string, public readonly day: string) {}
}

const employe1 = new Employe('Michael', '12.123.123/1234-12');
employe1.addTask(new Task('clean', 'monday'));
