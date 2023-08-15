"use strict";
let user1;
user1 = {
    name: "Masoud",
    age: 26,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there - I'm ");
//# sourceMappingURL=app.js.map