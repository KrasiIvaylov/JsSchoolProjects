function solve(arr) {


    let sum = Number(arr.shift()) + Number(arr.pop());
        
   
    return sum;
}

console.log(solve(['20', '30', '40']));