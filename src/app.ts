class Department {
  static fiscalYear = 2022;
  //   private name: string;
  //   private readonly id: string;
  protected employees: string[] = [];
  constructor(private readonly id: string, private name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department: ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

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

const it = new ITDepartment("d1", ["Max"]);
console.log(it);
it.describe();

it.addEmployee("Masoud");
it.addEmployee("Alex");
it.addEmployee("Sarah");

it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong!");
accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);

accounting.printReports();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

console.log(Department.createEmployee("New Employee!"));
console.log(Department.fiscalYear);
