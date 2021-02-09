
const myObj = {};

let name = 'George';

Object.defineProperty(myObj, 'name', {
    get(){
        return this._name;
    },
    set(value){
        this._name = value;
    }
});

console.log(myObj.name);
myObj.name = 'John';
console.log(myObj.name);