abstract class Department {
  static fiscalYear = 2022;
  //   private name: string;
  //   private readonly id: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, private name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

console.log(Department.createEmployee("New Employee!"));
console.log(Department.fiscalYear);

//-----------------++==++-----------------
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(): void {
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

//-----------------++==++-----------------

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe(): void {
    console.log("Accounting department - ID: " + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong!");
accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
