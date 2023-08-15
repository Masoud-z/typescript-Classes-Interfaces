// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string; //Now this one is optional
}
interface Greetable extends Named {
  //We can combine more  interfaces
  greet(phrase: string): void;
}

class Person implements Greetable {
  outputName?: string;
  constructor(public name: string, public age: number, outputName?: string) {
    if (outputName) {
      this.outputName = outputName;
    }
  }
  greet(phrase: string): void {
    if (this.outputName) {
      console.log(phrase + " " + this.outputName);
    } else {
      console.log(phrase + " " + this.name);
    }
  }
}

let user1: Greetable;

user1 = new Person("Masoud", 26);

user1.greet("Hi there - I'm ");
