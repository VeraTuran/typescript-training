var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance of the class
// without the constructor
/* let myCustomer = new Customer();
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon"; */
// with constructor
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
