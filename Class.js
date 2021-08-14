var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        return "Hi ! " + this.name;
    };
    return Person;
}());
var praveen = new Person('praveen');
var helloPraveen = praveen.hello();
console.log(helloPraveen);
