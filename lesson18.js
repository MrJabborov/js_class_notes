// // PROMISE

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

console.log('Started');

let members = {
    username: 'John',
    password: '2003',
};

const Facebook = (id, pwd)=> {

    return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
            if(members.username === id && members.password === pwd){
                resolve ('Welcome to Facebook')
            }else{
                reject ('Password or login is wrong')
            }
        }, 2000);
    })

};

const testing = async () => {
    try {
        let user = await Facebook('Johsn', '2003');
        console.log(user);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Finished');
    }
}

testing();

// BRIEF EXPLANATION
// we have an object called members that stores a username and password.
// The Facebook function takes two parameters: id (username) and pwd (password). 
// It returns a Promise object.
// Inside the Promise, there is a setTimeout function that simulates a delay of 2000 milliseconds (2 seconds). 
// This delay represents a network request or server response time.
// After the delay, the code checks if the provided id and pwd match the values stored in the members object. 
// If they match, the Promise is resolved with the message "Welcome to Facebook." 
// If they don't match, the Promise is rejected with the message "Password or login is wrong."
// After defining the Facebook function, there is another function called testing. 
// It is defined with the async keyword, which allows the use of await inside it.
// Inside the testing function, we use a try-catch block to handle any errors that may occur during the asynchronous operation.
// Within the try block, we use await to pause the execution and wait for the Promise returned by 
// the Facebook function to be resolved or rejected. If the Promise is resolved, 
// the resolved value (in this case, the message "Welcome to Facebook") is stored in the user variable and 
// then logged to the console using console.log(user).
// If the Promise is rejected, the error message is caught by the catch block and logged to the console using console.log(error).
// Regardless of whether the Promise is resolved or rejected, 
// the code inside the finally block is executed, and it logs the message "Finished" to the console.
// Finally, the testing function is called to start the execution of the asynchronous code.
// So, when the code is executed, it will output "Started" to the console first. 
// Then, after a 2-second delay, it will either log "Welcome to Facebook" (if the provided username and password are correct) 
// or "Password or login is wrong" (if they are incorrect). Finally, it will log "Finished" to the console.


// FETCH - Promise => (.then)
fetch('https://jsonplaceholder.typicode.com/users')
     .then ((response) => {
        return response.json();
     })
     .then ((data) => {
        console.log(data);
     })


// ALTERNATIVES WITH ASYNC/AWAIT
const myAsyncFunction = async() => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error);
    }  
};