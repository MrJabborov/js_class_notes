// PROMISE
console.log('Started');

let users = {
    username: 'Sophia',
    password: '1999',
};

const facebook = (id, pwd)=> {

    let user = new Promise ( (resolve, reject) => {

        setTimeout( ()=> {
            if(users.username === id && users.password === pwd){
                resolve ('Welcome to Facebook')
            }else{
                reject ('Password or login is wrong')
            }
        }, 2000);

    });

user
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Finished');
})

};

facebook('Sophia', '1999');

// CODE EXPLANATION
// In this simple example, we have an object called users that stores a username and password.
// The facebook function takes two parameters: id (username) and pwd (password).
//  Inside the function, there is a Promise object called user.
// The user Promise is created with the new Promise() constructor. 
// It takes a function with two arguments: resolve and reject. 
// This function represents an asynchronous operation that will be executed. 
// In this case, we use setTimeout to simulate a delay of 2000 milliseconds (2 seconds).
// Inside the setTimeout function, the code checks if the provided id and pwd match the values stored in the users object. 
// If they match, the Promise is resolved with the message "Welcome to Facebook." 
// If they don't match, the Promise is rejected with the message "Password or login is wrong."
// After creating the Promise, we can use the .then() method to handle the resolved value and the .catch() method to handle the rejected value. 
// In this example, we log the value to the console in each case.
// Additionally, there is a .finally() method that is executed regardless of whether the Promise is resolved or rejected. 
// In this case, it logs the message "Finished" to the console.
// Finally, the facebook function is called with the username "Sophia" and password "1999". 
// The code will execute the asynchronous operation inside the Promise and handle the result using .then(), .catch(), and .finally().
// So, when the code is executed, it will output "Welcome to Facebook" if the provided username and password are correct. 
// If they are incorrect, it will output "Password or login is wrong." 
// In either case, it will always log "Finished" to the console.



// ASYNC/AWAIT:
