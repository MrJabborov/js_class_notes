// // EVAL
// let a = 10;
// let b = 20;

// console.log('a + b');         // WRONG
// console.log(eval('a + b'));   // TRUE   EVAL- bizga string ichidagi variable larga access qilib arifmetik amal bajarishda ishlatiladi.
// console.log(`${a + b}`);      // TRUE   BackTick (` ${} `) ni ichiga solib ham ishlasak bo'ladi.


// // new Date Methods
// let d = new Date();

// console.log(d);
// console.log(d.getFullYear());  // Current year
// console.log(d.getMonth());    // js da month larno index 0 dan boshlab sanaydi shunga January is equal to 0,
// console.log(d.getDate());    // Current day of the month (1 - 31)
// console.log(d.getDay());    // Current day of the week (mon -1, tue -2, etc)
// console.log(d.getHours());  // Current HOUR
// console.log(d.getMinutes());  // Current MINUTES
// console.log(d.getSeconds());  // Current SECONDS
// console.log(d.getMilliseconds());  // Current MILLISECONDS

// // FOR EX:
// setInterval(()=> {
//     let data = new Date();
//     console.log(`Current Time: ${data.getHours()}: ${data.getMinutes()}: ${data.getSeconds()}`);
// }, 1000);


// // This shows the Korean current time zone
// const date = new Date();
// const options = { timeZone: 'Asia/Seoul' };
// console.log(date.toLocaleString('en-US', options));


// // CALL
// let user = {
//     id: 1,
//     name: 'John',

//     sayHi() {
//         console.log(this.name, this.id);
//     }
// };

// let user2 = {
//     id:2,
//     name: 'Ann'
// }

// user.sayHi();     // bu bizga uzi turgan obyektni target qilib beradi.
// user.sayHi.call(user2);  // CALL orqali biz boshqa obyekt ichida turib this orqali 2-obj ni target qila olamiz.


// //EXAMPLE  WITH PARAMETER.
// let student = {
//     id: 1,
//     name: 'Stepheny',

//     sayHi(age, year) {
//         console.log(this.name, age, year);
//     }
// };

// let student2 = {
//     id:2,
//     name: 'Murphy'
// }

// student.sayHi.call(student2, 27,'Years old')


// // APPLY 
// // bu ham CALL bilan bir xil, farqi shuki parameter olganda uni argumentini ARRAY [] ga solib olish kerak unda ishlamaydi.
// let employee = {
//     id: 1,
//     name: 'Stepheny',

//     sayHi(age, year) {
//         console.log(this.name, age, year);
//     }
// };

// let employee2 = {
//     id:2,
//     name: 'Murphy'
// }

// employee.sayHi.apply(student2, [27,'Years old'] );


// // BIND
// let foreigner = {
//     id: 1,
//     name: 'Stepheny',

//     sayHi(age, year) {
//         console.log(this.name, age, year);
//     }
// };

// let foreigner2 = {
//     id:2,
//     name: 'Murphy'
// }

// foreigner.sayHi.bind(foreigner2, 27,'Years old') ();

// // 
// // or we can use the second method.
// // let bindedValue = foreigner.sayHi.bind(foreigner2, 27,'Years old');
// // bindedValue();

// FUNCTION SCOPE
// BLOCK SCOPE
