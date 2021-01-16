function solve(arr) {

    let newArray = [];

    for (let i = 1; i < arr.length; i++) {
        
        if (i % 2 != 0) {
            newArray.push(arr[i] * 2);
        }

        
    }

   
    return newArray.reverse().join(' ');
    
}

console.log(solve([10, 15, 20, 25]));

console.log('-'.repeat(30));

console.log(solve([3, 0, 10, 4, 7, 3]));
