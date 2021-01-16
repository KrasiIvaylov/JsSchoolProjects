function solve(arr){
    const result = [];

    for (let num of arr) {
        if (num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    for (let nu of result) {
        console.log(nu);
    }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);