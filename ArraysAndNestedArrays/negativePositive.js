function solve(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < 0) {
            array.unshift(arr[i]);
        }else{
            array.push(arr[i]);
        }
        
    }
    return array;
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));