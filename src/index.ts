console.log("Hello world");

let age: number = 20;

if (age < 50) {
  age += 10;
}
console.log(age);

let numbers: number[] = [1, 2, 3]; //Arrays
numbers.forEach((n) => n.toFixed());

let user: [number, string] = [1, "Mosh"]; //Tuple
user[0].toLocaleString();
user[1].charAt(0);

//Enum

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

//function

function calculateTax(income: number, taxYear = 2025): number {
  if (taxYear < 2025) return income * 0.2;
  return income * 0.3;
}

calculateTax(10_000);

//Objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Chris",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Type aliases      // Alt + стрелки, чтобы двигать участки кода
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let secondEmployee: Employee = {
  id: 2,
  name: "Josh",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union

function kgToLbs(weight: number | string) {
  //Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10");

//Intersection

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal Types
//Literal (exact, specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//Nullable types
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null); //Ошибка //Теперь не ошибка

//Optional Chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday?.getFullYear);

//Optional element access operator
// customers.[0]

//Optional call
let log: any = null;
log?.("a");
