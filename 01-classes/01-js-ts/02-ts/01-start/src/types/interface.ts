export interface UserName {
  name: string;
  lastName: string;
  fullName(): string;
}

export interface UserAddress {
  country: string;
  city: string;
  streat: string;
}

export interface UserContacts {
  phone: string;
  email: string;
}

type UserType = UserName & UserAddress & UserContacts;

// OR

interface UserType2 extends UserName, UserAddress, UserContacts {}

export class User implements UserType {
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
    return this.name + ' ' + this.lastName;
  }
}
