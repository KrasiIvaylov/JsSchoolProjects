function books(arg){
    let cake = Number(arg) * 0.20;
    let drinks = cake * 0.55;
    let animator = Number(arg) / 3;

    let sum = cake + drinks + animator + Number(arg);

    console.log(sum);
}
books("2250");