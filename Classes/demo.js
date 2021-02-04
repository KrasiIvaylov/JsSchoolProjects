class myClass {
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return `Hi my name is ${this.name} and im ${this.age} years old`;
    }

}

const person = new myClass('Krasimir',  27);

console.log(`${person}`);