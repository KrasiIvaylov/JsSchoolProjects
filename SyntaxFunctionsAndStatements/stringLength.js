function solve(a, b, c){
    let sum1 = a.length;
    let sum2 = b.length;
    let sum3 = c.length;
    let sum = sum1 + sum2 + sum3;
    console.log(sum);
    let avg = Math.round(sum / 3);
    console.log(avg);
}
solve('chocolate', 'ice cream', 'cake');