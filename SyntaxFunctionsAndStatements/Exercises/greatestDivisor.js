function solve(num1, num2){

    while(num2 !== 0){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    let sum =  num1;
    console.log(sum);
}
solve(15, 5);
solve(2154, 458);