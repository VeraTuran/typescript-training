export {};

class Customer {
  // In typescript there is a special notation that assigns properties and creates the constructor all in one.
  // By doing this, we no longer need to make internal assignment within the constructor:
  constructor(private _firstName: string, private _lastName: string) {}

  // the accessors:
  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
