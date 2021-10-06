import { ClientInterface } from "./interfaces/client";

export class IndividualClient implements ClientInterface {
  id = 0;
  name = "";
  lastName = "";
  cpf = 0;
  cnpj = 0; // useless property

  constructor(id: number, name: string, lastName: string, cpf: number) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EmterpriseClient implements ClientInterface {
  id = 0;
  name = "";
  lastName = ""; // useless property
  cpf = 0; // useless property
  cnpj = 0;

  constructor(id: number, name: string, cnpj: number) {
    this.id = id;
    this.name = name;
    this.cnpj = cnpj;
  }
}
