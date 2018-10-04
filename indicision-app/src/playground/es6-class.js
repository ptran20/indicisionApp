class Person {
    constructor(name="anoymous",age=0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    hasLocation(){
        return!!this.homeLocation;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.hasLocation()){
            greeting+=` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}
const me = new Traveler("Mel", 3, "Philadelphiia");
console.log(me.getGreeting());

const other=new Traveler(undefined,undefined,"nowhere");
console.log(other.getGreeting());