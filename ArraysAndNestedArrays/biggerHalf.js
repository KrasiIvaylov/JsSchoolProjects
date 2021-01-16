function solve(arr) {
    let array = [];

    arr.sort((a, b) => a - b);

    
    for (let i = Math.round((arr.length - 1) / 2) ; i < arr.length; i++) {

        array.push(arr[i]);

    }
    

 return array;
    
}

console.log(solve([4, 7, 2, 5]));
//console.log(solve([3, 19, 14, 7, 2, 19, 6]));