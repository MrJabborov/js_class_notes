
// BLOCK SCOPE EXAMPLE
function myFunction() {
    if (true) {
      var x = 10; // Variable x is scoped to the block within the if statement
      let y = 20; // Variable y is scoped to the block within the if statement
      const z = 30; // Variable z is scoped to the block within the if statement
  
      console.log(x); // Output: 10
      console.log(y); // Output: 20
      console.log(z); // Output: 30
    }
  
    console.log(x); // Output: 10 (Variable x is accessible within the parent function)
    // console.log(y); // ReferenceError: y is not defined (Variable y is not accessible outside the if block)
    // console.log(z); // ReferenceError: z is not defined (Variable z is not accessible outside the if block)
  }
  myFunction();


// HIGHER ORDERED FUNCTION - parametr sifatida function qabul qilish. (map, filter, sort etc...)
let numbers = [10, 20, 30];
let array = [];

numbers.map ( (value) => {
    array.push(value + 1);
}) 

console.log(array);
  