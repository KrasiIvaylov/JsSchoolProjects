const myObj = {
    name: 'Peter',
    myMethod () {
        console.log('My name is ' + this.name);
    }
}; 

function myFunc(a, b){
    console.log(this);
    console.log(a, b);
};

function solve(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    console.log(newArr.join('-'));
}
solve([1, 2, 3, 4, 5])

/*
myFunc(5, 3);

myFunc.call(myObj, 6, 11);

myFunc.apply(myObj, [8, 4]);

const boundFunc = myFunc.bind(myObj);

boundFunc(9, 1);
*/

const funcRef = myObj.myMethod;
const boundRef = myObj.myMethod.bind(myObj);
funcRef();
boundRef();

const obj2 = {
    name: 'Krasi',
    age: 27,
    method (){
        console.log('My name is ' + this.name + ' aged ' + this.age);
    }
}

//const test = obj2.method.apply(obj2, ['Alex', 23]);

obj2.apply(methood, ['Alex', 23]);