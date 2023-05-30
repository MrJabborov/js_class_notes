  
   // IF ELSE 
let meva = 'water';

if(meva === 'olma'){
   console.log('10.000 won');
}else if(meva === 'nok'){
   console.log('15.000 won');
}else if(meva === 'tarvuz'){
   console.log('20.000 won');
}else{
   console.log('Bunday meva yoq');
}


          // NESTED IF ELSE
let fruit = 'bexi';
let kg = 10;
if(fruit === 'olma'){
   if(kg === 5){
      console.log('10.000 won');
   }else if(kg === 10){
      console.log('15.000 won');
   }else if(kg === 15){
      console.log('20.000 won');
   }
}else {
   console.log('Bunday meva hozircha yoq');
}


let meva1 = 'olma';
if(meva1 === 'olma'){
    console.log('10.000 won');     // bu yer da ikkita IF bitta oila hissoblanmaydi shuning uchun ikkala result ham chiqadi.
}if(meva1 === 'olma'){
    console.log('25.000 won');     // (if - else if - else) - bitta oila hissoblanadi
}


            // SWITCH - CASE (IF ELSE)
let kun = 2;
switch(kun){
    case 1 : console.log('dushanba');
    case 2 : console.log('seshanba');
    case 3 : console.log('chorshanba');break
    case 4 : console.log('payshanba');
    case 5 : console.log('juma');
    case 6 : console.log('shanba');
    case 7 : console.log('yakshanba');
}

            //   ALTERNATIVES if else
let kun1 = 2

if(kun1 === 1){
    console.log('dushanba');
}else if(kun1 === 2){
    console.log('seshanba');
}else if(kun1 === 3){
    console.log('chroshanba');
}else if(kun1 === 4){
    console.log('payshanba');
}else if(kun1 === 5){
    console.log('juma');
}else if(kun1 === 6){
    console.log('shanba');
}else if(kun1 === 7){
    console.log('yakshanba');
}

                     // TERNARY 
let num = 101;
num % 2 === 0 ? console.log('juft son') : console.log('toq son'); 


let age = 32;
let citizen = age >= 18 ? 'ovoz bera oladi' : 'Ovoz bera olmaydi'
console.log(citizen);
 
// ALTERNATIVES
let age1 = 12;
let citizen1 = age1 >= 18 ? console.log('ovoz bera oladi') : console.log('Ovoz bera olmaydi');
