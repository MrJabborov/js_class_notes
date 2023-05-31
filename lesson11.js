// CRUD => Create, Read, Update, Delete

let cars = [
    {id: 1, year: 1998, engine: 1, name: 'Tico'},
    {id: 2, year: 2005, engine: 1.2, name: 'Matiz'},    
    {id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
];

// CREATE
console.log('CREATED THE ID 4-5');

const onCreate = (newCar) => {
    cars = [...cars, {id: cars.length +1, ...newCar}];
}

onCreate( {year: 2000, engine: 1.8, name: 'Captiva'} );
onCreate( {year: 2018, engine: 2.2, name: 'K5'} );
console.log(cars);

// READ
console.log('READ ONLY THE DATA');

cars.map ( (value) => {
    console.log(value);
});

UPDATE

// // 1ST METHOD 
// console.log('UPDATED THE NAME OF ID3');
// const onUpdate = (car) => {
//     let updated = cars.map( (value) => value.id === car.id ? {...value, name: 'BMW'} : value); 
//     console.log(updated);
// }
// onUpdate({id: 3})


// 2ND DYNAMIC METHOD
console.log('UPDATED THE YEAR OF THE ID3 IN DYNAMIC WAY');
const onUpdate = (car) => {
    let updated = cars.map( (value) => value.id === car.id ? {...value, [car.keyType]: car.value} : value); 
    console.log(updated);
}
onUpdate({id: 3, keyType: 'year', value: 1995}) 

// DELETE
console.log('DELETED THE DATA OF ID3');

const onDelete = (ids) => {
    return cars.filter( (value) => value.id !== ids )
}
console.log(onDelete(3));
