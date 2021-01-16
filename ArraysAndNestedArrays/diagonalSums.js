function solve(arrs) {
    let a = 0;
    let b = 0;

    for (let row = 0; row < arrs.length; row++) {
        a += arrs[row][row];
        b += arrs[row][arrs.length - row - 1];
    }
    
    console.log(a + ' ' + b);


}


solve([[20, 40],
    [10, 60]]
   );

   console.log('*'.repeat(30) + '\n');

   solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );