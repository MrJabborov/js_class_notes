// MODULE,IIFE, PROTOTYPE, OOP CLASS


//OOP CLASS Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype of Person
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  // Creating objects using the Person constructor
  const john = new Person('John', 25);
  const jane = new Person('Jane', 30);
  
  // Accessing the greet method from the prototype
  john.greet(); // Output: Hello, my name is John and I'm 25 years old.
  jane.greet(); // Output: Hello, my name is Jane and I'm 30 years old.
  

//OOP class INHERITENCE
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    carInfo() {
      console.log(`${this.make} ${this.model} ${this.year}`);
    }
  }
  
  const car1 = new Vehicle('Toyota', 'Camry', 2020);
  const car2 = new Vehicle('Honda', 'Accord', 2021);
  
  car1.carInfo();
  car2.carInfo();
  