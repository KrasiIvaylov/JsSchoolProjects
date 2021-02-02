function subSum(arr, start, end) {


return arr.slice(start, end).reduce((a, c) => a + c, 0);


}

console.log(subSum());