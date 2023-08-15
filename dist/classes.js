"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
console.log(Department.createEmployee("New Employee!"));
console.log(Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT department - ID: " + this.id);
    }
}
const it = new ITDepartment("d1", ["Max"]);
console.log(it);
it.describe();
it.addEmployee("Masoud");
it.addEmployee("Alex");
it.addEmployee("Sarah");
it.printEmployeeInformation();
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please pass in a valid value!");
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment("d2", []);
            return this.instance;
        }
    }
    describe() {
        console.log("Accounting department - ID: " + this.id);
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
accounting.addReport("Something went wrong!");
accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.describe();
//# sourceMappingURL=classes.js.map