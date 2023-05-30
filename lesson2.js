// TYPE CONVERSION - uni 2 xil turi bor

// 1-implicit conversion - (automatic)
// 2-explicit conversion - (manual)

// FOR EX:
               // IMPLICIT conversion with STRINGS

let result1 = '5' + 10;   //Agar  (string +) bilan kelsa undan keyingi data ni type qanday bulsa ham uni string qilib oladi
let result2 = 10 + '5';   // string 
let result3 = '5' + true;     // string
let result4 = '5' + undefined;    // string

let result5 = '5' - '4';    //Agar string (-, *, /) bilan kelsa uning data type i string ga emas number ga o'zgaradi.
let result6 = 5 - '4';    // number
let result7 = '5' * '4';    // number
let result8 = 20 / '4';    // number

               // IMPLICIT conversion with BOOLEAN
// TRUE = 1,
// FALSE = 0, null, undefined and ('')

let result9 = '4' - true;
let result10 = 4 + true;
let result11 = 4 + false;
let result12 = 4 + null;
let result13 = 4 - null;

               // IMPLICIT conversion with UNDEFINED
 //    NaN - Not a Number

let result14 = 4 + undefined;   // NaN
let result15 = 4 - undefined;   // NaN
let result16 = true - undefined;   // NaN
let result17 = null - undefined;   // NaN


               // EXPLICIT conversion to Number
            //    to number - Number()
let result18 = Number('200');
let result19 = Number(true);
let result20 = Number(false);
let result21 = Number(null);
let result22 = Number('');
let result23 = parseInt('20.23');    // parseInt type ni number ga o'zgartirib beradi va faqat butun sonni chiqarib beradi (20 not 20.23)
let result24 = +'4.43';   // + bilan esa type ni number ga utqazadi va number ni hammasini qanday bulsa shunday chiqarib beradi4

                    // EXPLICIT conversion to String()
let result25 = String(1995);
let result26 = String(3 + 2);


                    // EXPLICIT conversion to Boolean()
let result27 = Boolean('');                    
let result28 = Boolean(' ');                    
let result29 = Boolean(1);                    
let result30 = Boolean(0);  
let result31 = Boolean(null);                    
let result32 = Boolean(undefined);                    
let result33 = Boolean(NaN);                    

let a = 20;
a = a + 10;
a+=10;
console.log(a);

                // Cpmparison / Logical Operations
//Comparison Operators ( ==, ===, <, >, <=, >= )

console.log(4 == '4');   // TRUE  // == - qiymatti uzini tekshiradi. Data type ni tekshirmaydi .
console.log(5 == 4);   
console.log(4 === '4');   // FALSE  // === - qiymatti va data type ni birgalikda tekshiradi. Bunda qiymat tugri bulsa ham data type ikki xil bulsa false chiqaradi
console.log(5 === 4);
console.log(4 < 5);
console.log(4 < 4);
console.log(4 <= 4);
console.log(4 >= 4);

// Logical operators =>  &&(and), ||(or), !(not).

let car1 = 'Gentra';
let car2 = 'Lacetti';
car1 === 'Gentra' && car2 === 'Lacetti' && console.log('18000$');
// agar ikkita qiymat ham true bulsa keyin console.log dagi 18000$ chiqadi unda False result chiqadi


let login1 = 'hey';
let parol1 = 'xyz';
if (login1 === 'hey' && parol1 === 'xyz') {
    console.log('Welcome to your Web-site');
} else {
    console.log('Entered a wrong password');
}


let login2 = 'hey';
let parol2 = 'xyz';
if (login2 === 'Hey' || parol2 === 'xyz') {
    console.log('Welcome to your Web-site');
} else {
    console.log('Entered a wrong password');
}

console.log(4 == 5 || 5 == 5 || 6 == 3);   //  0 + 1 + 0 = 1 (true) OR bilan TRUE chiqadi

console.log(4 == 5 && 5 == 5 && 6 == 3);   // AND bilan FALSE chiqadi


let num1 = '4';
let num2 = '5';
if (num1 === '4' && num2 === '5') {
    console.log('Juft son');
}else{
    console.log('Toq son');
}
