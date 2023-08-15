"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name, age, outputName) {
        this.name = name;
        this.age = age;
        if (outputName) {
            this.outputName = outputName;
        }
    }
    greet(phrase) {
        if (this.outputName) {
            console.log(phrase + " " + this.outputName);
        }
        else {
            console.log(phrase + " " + this.name);
        }
    }
}
let user1;
user1 = new Person("Masoud", 26);
user1.greet("Hi there - I'm ");
//# sourceMappingURL=app.js.map