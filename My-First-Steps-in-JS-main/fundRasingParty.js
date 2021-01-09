function party(arg1, arg2, arg3, arg4, arg5){
let dayCount = Number(arg1);
let bakersCount = Number(arg2);
let cakes = Number(arg3);
let waffles = Number(arg4);
let pancakes = Number(arg5);

let cakePrice = cakes * 45;
let wafflesPrice = waffles * 5.80;
let pancakesPrice = pancakes * 3.20;

let bakersPricePerDay = bakersCount * (cakePrice + wafflesPrice + pancakesPrice);
let moneyForCampaign = bakersPricePerDay * dayCount;
let moneyLeft = moneyForCampaign - moneyForCampaign / 8;

console.log(moneyLeft);
}
party("131","5",
"9",
"33",
"46")
;