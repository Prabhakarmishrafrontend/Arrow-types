//no parameter
const greet = () => "Hello, I am no Pramenter";
console.log(greet());


//Single Prameter 
const sqare = x => x * x;
console.log(sqare(4));

//Multiple Parameter 
const add = (a, b) => a + b;
console.log(add (2, 3));

//Function Body with Multiple Statements 
const greatPersion = name =>  {
    const mygreeting = "Hello, " + name + "!";
    return mygreeting;
}
console.log(greatPersion("prabhakar Mishra"));

//Returning Object literals
const makePerson = (firstName, lastName) => ({first : firstName, last : lastName});
console.log(makePerson ("Prabhkar", "Mishra"));

//High Order Function and Callbacks
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
