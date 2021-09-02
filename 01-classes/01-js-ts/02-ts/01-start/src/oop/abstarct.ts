abstract class Character {
  protected abstract sound: string;

  constructor(
    protected name: string,
    protected power: number,
    protected life: number,
  ) {}

  atk(char: Character): void {
    char.damage(this.name, this.power);
    char.emitSound();
  }

  protected damage(name: string, damage: number): void {
    this.life -= damage;
    console.log(
      `${this.name} take ${damage} of damage by ${name}: Life: ${this.life}`,
    );
  }

  abstract emitSound(): void;
}

export class Archer extends Character {
  protected sound = `${this.name}: Pewww...`;

  emitSound(): void {
    console.log(this.sound);
  }
}

export class Worrior extends Character {
  protected sound = `${this.name}: Agrrr...`;

  emitSound(): void {
    console.log(this.sound);
  }
}

const archer1 = new Archer('Eduawrd', 50, 300);
const worrior1 = new Worrior('Sigir', 30, 500);

archer1.atk(worrior1);
archer1.atk(worrior1);
worrior1.atk(archer1);
worrior1.atk(archer1);
