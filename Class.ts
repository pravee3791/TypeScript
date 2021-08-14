class Person {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
    hello(){
        return `Hi ! ${this.name}`
    }
}

const praveen = new Person('praveen')
const helloPraveen = praveen.hello();
console.log(helloPraveen)

