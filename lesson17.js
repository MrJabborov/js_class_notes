// Class inheritence

class Parent {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getRegister (){
        console.log(`${this.username} is now registered`);
    }
};

class Child extends Parent{
    constructor(username, email, password, packageType){
        super(username, email, password);
        this.packageType = packageType;
    }

    getPackage(){
        console.log(`${this.username} is now registered for the ${this.packageType} Gym membership.`);
    }
};

let user = new Child ('Sophia', 'sophia@gmail.com', '1997', 'Premium');
user.getRegister();
user.getPackage();


// SYNCHRONE
// In JavaScript, synchronous operations refer to tasks that are executed in a blocking manner, 
// where the program waits for each operation to complete before moving on to the next one. 
// This means that if there is a synchronous operation that takes a significant amount of time to complete,
// it will block the execution of other code and potentially make the program unresponsive.


// ERROR HANDLING
// TRY - muammoga sababchi bukishi mmkn bulgan code.
// CATCH - muammoni chiqaradi.
try{
    let name = 'Zuhriddin';
    console.log(name);
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
};



// CALLBACK
// THIS IS BRIEF EXPLANATION:
// First, there is an object called users that stores a username and password.
// Then, there is a function called facebook that takes three parameters: id, pwd, and callback.
// This function simulates a login process by checking if the provided id and pwd match the values stored in the users object.
// Inside the facebook function, there is a setTimeout function that delays the execution of the login process by 
// 2000 milliseconds (2 seconds). This is done to simulate a network delay or server response time.
// After the delay, the function checks if the provided id and pwd match the values stored in the users object. 
// If they match, it calls the callback function with the message "Welcome to Facebook." If they don't match, 
// it calls the callback function with the message "Password or ID is wrong."
// Finally, there is a variable called member that calls the facebook function with the username "Sophia" and password "1999". 
// It also provides a callback function that logs the received data to the console.
// When the code is executed, it will output either "Welcome to Facebook" if the provided username and password are correct, 
// or "Password or ID is wrong" if they are incorrect. The output will be logged to the console after a 2-second delay.

let users = {
    username: 'Sophia',
    password: '1999',
}

const facebook = (id, pwd, callback) => {

    setTimeout(()=> {
        if(users.username === id && users.password === pwd){
            callback ('Welcome to Facebook')
        }else{
            callback ('Password or ID is wrong')
        }
    }, 2000)

}

const member = facebook('Sophia', '1999', (data)=> {
    console.log(data);
});

