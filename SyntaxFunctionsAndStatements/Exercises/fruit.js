function solve(fruit, weight, price){
    const weightKg = weight/1000;
   const money = weightKg * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)

}
solve('orange', 2500, 1.80);
