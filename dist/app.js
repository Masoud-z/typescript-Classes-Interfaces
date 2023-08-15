"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Masoud", 26);
user1.greet("Hi there - I'm ");
//# sourceMappingURL=app.js.map