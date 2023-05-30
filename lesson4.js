
                      // FOOR LOOP
 for(let i = 1; i <= 5; i++){
     console.log('hey JavaScript');
 }
 
for(let i = 1; i <= 5; i++){
    console.log(i);
}


                      // INFINITE FOR LOOP
for(let i = 1; i > 0; i--){
    console.log(i);
}

                //       another example
for(let i = 5; i > 0; i--){
    console.log(i);
}


                        // toq son/ juft son ga ajratish
for(let i = 1; i <= 5; i++){
    if(i % 2 === 0){
        console.log(i, 'juft son');
    }else{
        console.log(i, 'toq son');
    }
}

                           // STRING WITH INDEX
let str = 'Hello';
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

                              // ALTERNATIVES
let string = 'Hello';
for(let i = 0; i < 5; i++){
        console.log(string[i]);
}

                                 // // str.length
let strr = 'HelloWorld';
for(let i = 0; i < strr.length; i++){
        console.log(strr[i]);
}

let strin = 'HelloWorld';
for(let i = 0; i < strin.length; i++){
        console.log(strin);
}

                         // hello - olleh
let sttr = 'hello';
for(let i = sttr.length -1; i >= 0; i--){
        console.log(sttr[i]);
}
// bu yerda sttr.length-1 bermasak UNDEFINED chiqib qoladi. chunki index da 0 dan sanaydi, string da 1 dan sanaydi.


let strg = 'hello';
let newStr = '';   // Yonma-yon chiqarish

for(let i = strg.length -1; i >= 0; i--){
        newStr = newStr + strg[i]
        // newStr += str[i]
}
console.log(newStr);


                     // NESTED LOOP
for(let i = 0; i <= 2; i++){
        console.log('--tashqi loop');
        for(let j = 0; j <= 3; j++){
                console.log('------ichki loop');
        }
}

 