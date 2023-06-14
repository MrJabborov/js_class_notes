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