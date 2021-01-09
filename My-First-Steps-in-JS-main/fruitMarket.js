function market(arg1, arg2, arg3, arg4, arg5){

    let strawberryPrice = Number(arg1);
    let bananaWeight = Number(arg2);
    let orangeWeight = Number(arg3);
    let raspberriesWeight = Number(arg4);
    let strawberryesWeight = Number(arg5);

    let raspberriesPrice = strawberryPrice / 2;
    let orangePrice = raspberriesPrice * 0.60;
    let bananaPrice = raspberriesPrice * 0.20; 
    
    let strawberriesTotal = strawberryesWeight *  strawberryPrice;
    let raspberriesTotal = raspberriesPrice * raspberriesWeight;
    let orangeTotal = orangePrice * orangeWeight;
    let bananaTotal = bananaPrice * bananaWeight;

    let sum = strawberriesTotal + raspberriesTotal + orangeTotal + bananaTotal;

    console.log(sum);
}
market("63.5",
"3.57",
"6.35",
"8.15",
"2.5")
;