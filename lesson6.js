                            //  MATH METHODS

console.log(Math.pow(3, 2));    // sonni darajaga ko'tarish
console.log(Math.sqrt(64));     // sonni ildiz ostidan chiqarish
console.log(Math.cbrt(64));       // sonni 3-darajali ildiz ostidan chiqarish
console.log(Math.max(12, 33, 5));    // sonni eng kattasini tanlash
console.log(Math.min(33, 12, 99));    // sonni eng kichigini tanlash
console.log(Math.abs(-5));           // sonni manfiy bulsa ham musbat qilib chiqarish
console.log(parseInt( Math.random() * 10));      // sonni random tanlash
console.log(Math.round(3.7));          // sonni yaxlitlash
console.log(Math.floor(19.9));        // sonni butun qismini tanlash
console.log(Math.ceil(4.1));          // sonni qoldig'i 5dan kichik bulsa ham birri qushib beradi

                           // FUNCTION

function person(name, age) {
    console.log('Good morning ' + name + ' ' + age);
}
person('John Week', 27);
person('Brad Pitt', 36);


function person(name, phoneNumber, username) {
    console.log('Name: ' + name + ' ' + 'PhoneNumber: ' + phoneNumber + ' ' + 'Username: ' + username);
}
person('Alovuddin', 821077526887, '@w_1995')
person('Mirjalol', 821073456633, '@mir_uzb')
