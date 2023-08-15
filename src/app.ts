class Department {
  //   private name: string;
  //   private readonly id: string;
  protected employees: string[] = [];
  constructor(private readonly id: string, private name: string) {
    // this.name = n;
    // this.id = id;
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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
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

accounting.printReports();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
