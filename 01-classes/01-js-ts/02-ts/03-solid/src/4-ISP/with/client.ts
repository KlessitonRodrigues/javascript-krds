import {
  EmterpriseClientInterface,
  IndividualClientInterface,
} from "./interfaces/client";

export class IndividualClient implements IndividualClientInterface {
  name = "";
  lastName = "";
  cpf = 0;

  constructor(name: string, lastName: string, cpf: number) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  get register(): number {
    return this.cpf;
  }
}

export class EmterpriseClient implements EmterpriseClientInterface {
  name = "";
  cnpj = 0;

  constructor(name: string, cnpj: number) {
    this.name = name;
    this.cnpj = cnpj;
  }

  get register(): number {
    return this.cnpj;
  }
}
