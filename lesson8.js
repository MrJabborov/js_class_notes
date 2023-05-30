                    // OBJECTS covered with ARRAY
let object1 = {
    name: 'Ali',
    age: 27,
    occupation: 'Developer'
}
let object2 = {
    name: 'Firdavs',
    age: 22,
    occupation: 'Amos Worker'
}
let array = [
    {object1}, {object2}
]
console.log(array);

                      // ways of creating new object
let person1 = new Object();
person1.name = 'Alisher';

let person2 = {
    name: 'Alisher'
};
console.log(person1);
console.log(person2);

                        // EX1
let car = {
    name: 'BMW',
    year: 2021,
    engine: 1.8,
    'full status': 'BMW COORPORATION',
}
// console.log(car.full status); WRONG
console.log(car['full status']);  


                   // DYNAMIC ACCESS
let mashina = {
    name: 'bmw',
    year: 2021,
    engine: 1.6,
}

let key = 'name';

console.log(mashina.key);      // undefined
console.log(mashina['key']);   // undefined
console.log(mashina[key]);   // Dynamic Access

             //   EXTRA1
mashina.name = 'BMW';      // Updates the data
mashina.color = 'red';     // adds a new data
delete mashina.engine;     // deletes an existing data


             //   EXTRA2

console.log(Object.keys(mashina));    // key larni array ga solib beradi
console.log(Object.values(mashina));   // value larni array ga solib beradi
console.log(Object.entries(mashina));   // key va value larni array ga solib beradi
console.log(Object.fromEntries(array));   // array ga solingan key-value larni object {} qilib beradi.


             //   OBJECT METHODS

Object.freeze(mashina); // hechqanday updating the data, adding a new data or deleting the data ishlamaydi
Object.seal(mashina); //updating the data ishlaydi, adding a new data or deleting the data ishlamaydi.

// FOR IN

for(let keys in mashina){
    console.log(keys);
    console.log(mashina[keys]);
}

