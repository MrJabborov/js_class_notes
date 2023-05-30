// JS introduction,variables and data types, primitive vs non-primitive, typeof and hoisting

console.log(1995);      // number
console.log('Hello World');     // string
console.log(6 > 5);     // Boolean (true/false response)
console.log(123123123123123123123123123142333123n);    // BigInt(n) - (big integer_ when the number overexceeds its limit, we can use "n" at the end of the number to see full form.

var box = 'hey,whats up'
console.log(box);

var num = 123123123123123123123123123142333123n
console.log(num);
// when you cant remember long number digits you can save it as a class name and use it 
// instead of the whole number  thats why we use variables

var title = 105;
title = 150;
title = 180;
title = 222;
var title = 199;   // result da 199 chiqadi chunki oxirgi variable shu
console.log(title);  
// var da result da qiymatti oxirgisini chiqarib beradi, 
// shunda project da keyinchalik bir xil name berib quyilsa the last result chiqqanligi uchun bu narsa muammo hissoblanadi.


                     // OBJECT
let obj = {
    name: 'Zukhriddin',
    status: 'Job seeker',
    age: 27,
    country: 'Uzbekistan'
}
console.log(obj);  // result da hamma natija chiqadi

console.log(typeof obj);   
console.log(obj.name);   // result da natijani seperately chiqarishimmiz mmkn
console.log(obj.status);
console.log(obj.age);
console.log(obj.country);

                     // FUNCTION
function example(){
    console.log('heyyy')
}
example();


                  // ARRAY 
const arr = [1, 2, 3, 4, 5,];
console.log(arr[3]);  // qiymat 0 dan boshlanadi va bu yerda 3 bersak bizaga 4 ni olib kelib beradi


let nomalum = null;       // qiymat bo'lmaganda qiymat urnida null berib ketamz, shunda qiymat urni zaynit bulib turadi
// let nomalum;    // qiymat bermasak unda UNDERFINED bulib keladi
// console.log(nomalum);


// HOW TO SEE THE TYPES OF THE PRIMITIVES
let name = 'Jabbarov';
let age = 27;
let isAdult = true;
let myNull = null;
let myUnderfined = undefined;
let sym = Symbol('UZBEK');
let big = BigInt(1999999999999999)

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAdult);
console.log(typeof myNull);
console.log(typeof myUnderfined);
console.log(typeof sym);
console.log(typeof big);


                           // HOISTING 

// var str;     (invisible decloration) 
console.log(str);
var str = 'Salom';
// var bilan yaratilgan varieble hoisting buladi. Bunda decleration (var str =)ni tepaga ko'taradi, 
// lekin value('salom')ni ko'tarmaydi shuning uchun result UNDEFINED chiqadi.


console.log(str);
let str = 'Salom';   // let hoisting bulmaydi

console.log(str);
const str = 'Salom';   // const ham hosting bulmaydi