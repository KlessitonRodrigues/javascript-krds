class User {
  constructor(private _cpf: string) {
    this.cpf = _cpf;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf) {
    this._cpf = cpf;
  }
}
