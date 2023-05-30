// NON-PRIMITIVE - copied by reference
const obj = {
    name: 'test',
}
const anotherObj = obj;

anotherObj.name = 'another object';
obj.status = 'Developer';

console.log(anotherObj);


// // PRIMITIVE - copied by value
let string = 'test';
let anotherString = string;

anotherString = 'another test';

console.log(string);
console.log(anotherString);


                          // CLONE Olish

                     //SHallow clone 1
const object = {
    name: 'ALI',
    age: 25
}

const anotherObject = Object.assign({}, object);

anotherObject.name = 'Alisher';
anotherObject.status = 'developer';
delete anotherObject.age;

console.log(object);
console.log(anotherObject);


                           //SHallow clone 2
                          // SPREAD OPERATOR (...)

const obj = {
     name: 'Zuhriddin',
     age: 27,
}
console.log({...obj, name: 'Firdavs', nationality: 'uzbek'});
  // SPREAD operatori obj dan clone ham olib beradi va uni ichida boshqa UPDATE/CREATE or DELETE amallarni ham bajarishimmiz mmkn. 



                        // Deep clone (nested obj)
const obj = {
    name: 'Ali',
    age: 25,

    properties: {
        location: 'Seoul South Korea'
    }
}

const anotherObj = structuredClone(obj);  // nested clone


anotherObj.name = 'Alisher';
anotherObj.status = 'developer';
anotherObj.properties.location = 'Incheon South Korea';  // nested key gq access

console.log(obj);
console.log(anotherObj);


                     // DESTRUCTURE

const employee = {
     id: 1213,
     name: 'Ali',
     occupation: 'Programmer'
}                    

const {id, name, occupation} = employee;   // Destructure

// console.log(employee.id, employee.name, employee.occupation);
console.log(id, name, occupation);




                           // NESTED DESTRUCTURE

const employees = {
     developers: {

          first: {
               id1: 222,
               name1: 'Firdavs',
               occupation1: 'Teacher',
          },

          second: {
               id2: 333,
               name2: 'Magrur',
               occupation2: 'Student',
          }
     }
};

const {
     developers: {
          second: {
               id2, 
               name2, 
               occupation2
          },
     }
} = employees;

// // const {developers: {first: {id, name, occupation}}} = employees;   //one-line Simple version

console.log(id, name, occupation)


                                // DESTRUCTURE KEY UPDATE 
//SYNTAX:     OriginalName : UpdateName

const user = {
     name: 'Abbos',
     age: 25,
     status: 'Student'
}

const {name : ism, age : yosh, status : kasb} = user;

console.log(ism, yosh, kasb);


