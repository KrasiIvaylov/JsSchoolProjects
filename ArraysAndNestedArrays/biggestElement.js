function solve(arr) {
  
    let newArr = arr.toString().split(',').map(Number);

    let max = Math.max.apply(null, newArr);

    return max;


}

console.log(solve([[20, 50, 10],
                   [8, 33, 145]]
   ));

   console.log('*'.repeat(30));

   console.log(solve([[3, 5, 7, 12],
                      [-1, 4, 33, 2],
                      [8, 3, 0, 4]]
   
   ));