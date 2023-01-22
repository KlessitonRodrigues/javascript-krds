export type UserName = {
  name: string;
  lastName: string;
  fullName: () => string;
};

export type UserAddress = {
  country: string;
  city: string;
  streat: string;
};

export type UserContacts = {
  phone: string;
  email: string;
};

export class User implements UserName, UserAddress, UserContacts {
  constructor(
    public name: string,
    public lastName: string,
    public country: string,
    public city: string,
    public streat: string,
    public phone: string,
    public email: string,
  ) {}

  fullName(): string {
    return this.name + " " + this.lastName;
  }
}
