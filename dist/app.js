"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Masoud");
accounting.addEmployee("Alex");
accounting.addEmployee("Sarah");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map