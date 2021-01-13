function solve(num, com1, com2, com3, com4, com5) {
    let sum = +num;

    const arr = [com1, com2, com3, com4, com5];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num++;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num -= num * 0.2;
                console.log(num);
                break;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

