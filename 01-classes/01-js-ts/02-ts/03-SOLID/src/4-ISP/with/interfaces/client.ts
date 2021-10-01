interface Client {
  get register(): number;
}

export interface IndividualClientInterface extends Client {
  name: string;
  lastName: string;
  cpf: number;
}

export interface EmterpriseClientInterface extends Client {
  name: string;
  cnpj: number;
}
