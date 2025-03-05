export interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  estado: string;
  cep: string;
  uf: string;
}

export type AddressMapType = Map<string, Address>;
