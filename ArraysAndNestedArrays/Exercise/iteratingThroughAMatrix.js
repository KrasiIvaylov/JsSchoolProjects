function solve(matrix) {

       
       for(var i = 0; i < matrix.length; i++) {
           var cube = matrix[i];
           for(var j = 0; j < matrix.length; j++) {
               console.log("cube[" + i + "][" + j + "] = " + cube[j]);
           }
       }
}

solve([
    [1, 2, 3],
    [4, 5, 6],    
    [7, 8, 9],
   ])