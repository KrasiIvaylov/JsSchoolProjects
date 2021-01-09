function deposit(arg1, arg2, arg3){
    let depositSum = Number(arg1);
    let depositTerm = Number(arg2);
    let interestPerAnnum = Number(arg3);

    let interest = depositSum * (interestPerAnnum * 0.01);
    let interestPerMonth = interest / 12;
    let sum = depositSum + (depositTerm * interestPerMonth);
    console.log(sum);
}
deposit("2350",
"6",
"7")
;

