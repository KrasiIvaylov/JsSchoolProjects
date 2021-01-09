function birthday(arg){
    let hall = Number(arg);
    let cake = hall * 0.20;
    let drinks =  cake * 0.55;
let animator = hall / 3;
let result = hall + cake + drinks + animator;
    console.log(result);
}
birthday("2250");