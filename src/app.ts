class Department {
  //   private name: string;
  //   private readonly id: string;
  private employees: string[] = [];
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

const accounting = new Department("d1", "Accounting");
console.log(accounting);
accounting.describe();

accounting.addEmployee("Masoud");
accounting.addEmployee("Alex");
accounting.addEmployee("Sarah");

accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
