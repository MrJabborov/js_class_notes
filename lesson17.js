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

try{
    let name = 'Zuhriddin';
    console.log(name);
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}