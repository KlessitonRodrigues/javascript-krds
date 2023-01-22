export class Writer {
  private _tool: Tool | null = null;

  constructor(protected name: string) {}

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }
}

export abstract class Tool {
  constructor(public color: 'blue' | 'red' | 'black') {}
  abstract write(): void;
}

export class Pen extends Tool {
  write(): void {
    console.log(`The ${this.color} pen is writting`);
  }
}

export class Pencil extends Tool {
  write(): void {
    console.log(`The ${this.color} pencil is writting`);
  }
}

const writer1 = new Writer('Writer1');

writer1.tool = new Pen('red');
writer1.tool.write();

writer1.tool = new Pencil('black');
writer1.tool.write();
