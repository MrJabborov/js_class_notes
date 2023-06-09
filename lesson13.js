// Set/WeakSet, Map/WeakMap

// new Set()
const arr = [1, 1, 2, 2, 3, 3, 4, 5];
const set = new Set(arr);

// newSet To Array
let unique = [...set];
console.log(unique);


//new Set() METHODS
set.add(100);   // true
set.has(1000);  // false
set.delete(1);
set.clear();
set.size;


// new Map()
let deviceColor = new Map();
deviceColor.set('phone', 'black');

console.log(deviceColor.keys());
console.log(deviceColor.values());
console.log(deviceColor.entries());

deviceColor.delete('phone');
deviceColor.clear();
deviceColor.has('phone')
deviceColor.get('phone');
deviceColor.size;


//EXAMPLE FOR  new Map()
let users = new Map ([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
]);

let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};

console.log(Object.entries(obj));
console.log(users.entries());


// new WeakMap()
const myWeakMap = new WeakMap();

let object = {
    name: 'Hey'
}

myWeakMap.set(obj, 'hey');

console.log(myWeakMap.has(obj));


//EXAMPLE FOR Recursive function - Recursion
function countDown(number){
  console.log(number);
  let newNumber = number - 1;
  
   if(newNumber > 0){
     countDown(newNumber)
   }

}
countDown(10);


// EXAMPLE FOR CLOSURE
let name = 'Zukhriddin';

function example() {
    let text = 'hey';
    // console.log(text, name);
    function child() {
        console.log(text);
    }
    child()
}
example()
