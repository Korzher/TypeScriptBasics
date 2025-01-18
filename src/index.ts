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
