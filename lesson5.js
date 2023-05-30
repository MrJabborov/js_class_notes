                                //  WHITE / DO WHILE LOOPS

                  // WHILE
let i = 0;
while(i <= 10){
    console.log(i);
    i++
}

let j = 10;
while(j > 0){
    console.log(j);
    j--
}

let k = 10;
while(k){
    console.log(k);
    k--
}

// DO WHILE

let i1 = 0;
do{
    console.log(i1);
    i1++
}while(i1 <= 10);


let j1 = 1;
do{
    console.log(j1);
    j1++
}while(j1 > 2);  // false bulsa ham bunda bir marta kod yurib ketadi


// BREAK

for(let k1 = 1; k1 <= 6; k1++){
    if(k1 == 4){
        break
    }
    console.log(k1);
}



// CONTINUE

for(let i = 1; i <= 6; i++){
    if(i == 4){
        continue
    }
    console.log(i);
}

          // toq son larni ajratib olish with CONTINUE
for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        continue
    }
    console.log(i);
}


           // juft son larni ajratib olish with CONTINUE
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log(i);
}

                         // KARRA JADVALI

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('===================');
}

               // NUMBER data type

console.log(10 + 1);
console.log(10 - 2);
console.log(10 * 3);
console.log(10 / 4);
console.log(10 % 2);   // qoldiq qolmaydi
console.log(10 % 3);   // qoldiq qoladi
console.log(10 ** 2);  // sonni darajaga ga ko'tarish
console.log(25 ** (1/2));  // sonni ildiz ostidan chiqarish
console.log(64 ** (1/2));  // sonni ildiz ostidan chiqarish 1-usul
console.log(64 ** 0.5);  // sonni ildiz ostidan chiqarish 2-usul


// NUMBER METHODS

let son1 = 10;
console.log(Number.isInteger(son1));   // TRUE if it is Butun son

let son2 = 10.523;
console.log(Number.isInteger(son2));   // FALSE if it is TOQ son


let son3 = 10.523;
console.log(Number.parseInt(son3));   //  sonni faqat butun qismini olib beradi

let son4 = 10.52545;
console.log(son4.toFixed(2));   // Sonni yaxlitlab beradi. type of string qaytaradi
