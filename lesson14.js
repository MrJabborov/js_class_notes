
// EXAMPLE FOR GETTER/ SETTER
let person = {
    firstName: 'Zukhriddin',
    lastName: 'Jabborov',

    // getter
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },

    // setter
    set fullName(value){
        let values = value.split(' ');
        this.firstName = values[0];
        this.lastName = values[1];
    },
  
};
person.fullName = 'Muhammad Yusuf';
console.log(person.fullName);


// CURRY FUNCTION
// 1ST EXAMPLE
const addCurry = (a) => {
    return function(b){
        return function(c){
            console.log(a + b + c);
        }
    }
}
addCurry(5)(5)(5);


// 2ND EXAMPLE
let request = (greet) => {
    return (name)=> {
        return (message)=> {
            console.log(`${greet} ${name} ${message}`);
        }
    }
};

request('Good morning')('Zukhriddin')('Nice to see you again');

// ANOTHER EXAMPLE
function calculateArea(length) {
    return (width) => {
      console.log(length * width);
    };
  }
  
  calculateArea(5)(3);

// JSON
let users =[

    {
        "name": "Abdulloh",
        "age": 27,
        "isMale": true,
    
        "friends": [
            {"name": "Abbosbek"},
            {"name": "Elyorbek"},
        ],
    
        "favoriteNumber": 32
    }

];

console.log(users[0].name);
console.log(users[0].age);
console.log(users[0].friends[1].name);


// Obj to JSON
let obj = {name: 'webbrain Academy'};

let objToJson = JSON.stringify(obj);
console.log(objToJson);

// JSON to Obj
let jsonToObj = JSON.parse(objToJson);
console.log(jsonToObj);

