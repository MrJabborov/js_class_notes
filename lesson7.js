// EXERCISE1
let str1 = 'Webbrain'
console.log(str1[4]);
console.log(str1.length);       // str nechta harf ekanini ko'rsatadi
console.log(str1.length -5);     // str.length necciga teng bulsa ushandan -4 qilib qolgan sonni ko'rsatadi
console.log(str1[str1.length -1]);         // Oxirgi harfni olib beradi


// EXERCISE2
let str2 = 'Webbrain "IT" Academy' 
let str3 = "Webbrain 'IT'  Academy"
let str4 = `Webbrain "IT" '101'
Academy`
console.log(str2);
console.log(str3);
console.log(str4);


// EXERCISE3

let name = 'Alovuddin';
let status = "from Namangan"
let str5 = `Mening ismin: ${name} ${status}`;  // backtick(``) bilan biz 2-variable ni ${2nd_variable} shunday qilib access qila olamiz
console.log(str5);

// EXERCISE4
                  // STRING LITERAL - ${}
let str6 = `${12-2} ${5+5} ${20/2} ${5*2}`
console.log(str6);   // biz back-tick(``) orasida STRING LITERAL - ${} bilan arifmetik amal ham qila olamz.

                      EXTRA 
let str7 = 'Webbrain \n Academy'   // new line (\n)
console.log(str7);

let str8 = 'Webbrain \t Academy'   // TAB - 4 times white space (\t)
console.log(str8);

let str9 = 'Webbrain \r Academy'   // RIGHT - text ni o'ng tomonini olib beradi (\n)
console.log(str9);

let str10 = `Webbrain \r Academy`   // new line (\n)
console.log(str10);  


                               // STRING METHODS
let str = 'Alhamdulillah'

console.log(str.toLowerCase());    
console.log(str.toUpperCase());
console.log(str.startsWith('W'));   // TRUE chunki katta W bilan BOSHLANGAN
console.log(str.startsWith('w'));   // FALSE  chunki kichkina w bilan BOSHLANMAGAN
console.log(str.endsWith ('n'));    // TRUE  chunki kichkina n bilan TUGAGAN
console.log(str.endsWith ('N'));    // FALSE  chunki katta N bilan TUGAMAGAN
console.log(str.padStart(11, 'd'));  // 2ta qiymat oladi. 1-si nechta qushish, 2-si nima qushish. Boshiga qushish
console.log(str.padEnd(11, 'd'));   // 2ta qiymat oladi. 1-si nechta qushish, 2-si nima qushish. Oxiriga qushish
console.log(str.replace('Web', 'IT'));  // 2TA qiymat oladi. 1-si nimani o'zgartirish (bir-xil bulishi kk katta-kichik harflar) , 2-si nimaga o'zgartirish. 
console.log(str.repeat(10));          // 1ta qiymat oladi va ushanchaga ko'paytirib beradi
console.log(str1.concat(str2, 'UZB'));      // 1ta stringni 2-siga qushib beradi
console.log(str.includes('Web'));    // true - chunki Web Webbrain ni ichida bor
console.log(str.includes('web'));    // false - chunki kichkina web Webbrain ni ichida yoq u katta harf bilan boshlangan.
console.log(str.indexOf('b'));    // yozGAN harfimmiz nechinchi index da turganini bilib beradi
console.log(str.lastIndexOf('b'));  // str dagi oxorgi b harfi qaysi index da ekanligini belgilab beradi.nechta b bulsa ham bizga eng oxirgisini ko'rsatadi
console.log(str.charAt(4));    // 1 TA qiymat(number) oladi. berilgan index da nima harf turganini ko/rsatadi
console.log(str.substring(2, 5));   // 2 ta qiymat (number) oladi 1-si nechanchi index dan 2-si nechanchi index gacha kesib olishshi belgilaydi
console.log(str.slice(2, 5));   // 2 ta qiymat (number) oladi 1-si nechanchi index dan 2-si nechanchi index gacha kesib olishshi belgilaydi
console.log(str.substr(2, 3));  // 2 ta qiymat (number) oladi 1-si nechanchi index dan 2-si nechanchi index gacha kesib ilishshi belgilaydi. farqi 1-index kelgan joydan, 2-index sanab ketadi.

