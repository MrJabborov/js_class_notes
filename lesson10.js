// ARRAY ADVANCED

// SORT (numbers)
let arr1 = [2, 5, 4, 1, 3, 6];
console.log(arr1.sort());

let arr2 = [2, 5, 4, 1, 3, 6, 12, 100, 556];
console.log(arr2.sort( (a,b) => a-b ));

let arr3 = [2, 5, 4, 1, 3, 6, 12, 100, 556];
console.log(arr3.sort( (a,b) => b-a ));

// SORT (letters)
let arr4 = ['a', 'c', 'b']
console.log(arr4.sort());

let arr5 = ['a', 'c', 'b', 'A', 'C', 'B']
console.log(arr5.sort( (a,b) => a.localeCompare(b) ));

let arr6 = ['a', 'c', 'b', 'A', 'C', 'B']
console.log(arr6.sort( (a,b) => b.localeCompare(a) ));

// MAP (array for-loop)
let arr7 = ['John', 'Ann', 'Stepheny', 'Murphy'];
arr7.map( (value, index, array) => {
    console.log(value);    // console.log(str[i]);
    console.log(index);    // console.log(i);
    console.log(array);    // console.log(str);
})

// MAP (value update)
let arr8 = ['John', 'Ann', 'Stepheny', 'Murphy'];
let newArr = arr8.map( (value, index, array) => {
    return 'Littles'
})
console.log(newArr);

// FOREACH = MAP.  but it cannt UPDATE the values.
let arr9 = ['John', 'Ann', 'Stepheny', 'Murphy'];
arr9.forEach( (value, index, array) => {
    console.log(value);    // console.log(str[i]);
    console.log(index);    // console.log(i);
    console.log(array);    // console.log(str);
})

// FILTER
let arr10 = [2, 4, 7, 9, 12, 100];
let filteredValue = arr10.filter( (value, index, array) => value > 10 );
console.log(filteredValue);

let arr11 = ['John', 'Ann', 'Murphy'];
let findValue = arr11.find( (value, index) => value !== 'Ann' );
console.log(findValue);