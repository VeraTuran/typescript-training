class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }

  // In typescript we can use classic getter and setter methods 
  // Or we use "accessors". These do not have a type, not even "void".
}

// let's create an instance of the class

// without the constructor
/* let myCustomer = new Customer();
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon"; */

// with constructor
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
