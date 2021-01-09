function arrRotation(arr, rot){

let rotations = rot % arr.length;
let resultArr = [];


for(let index in arr){
    if (index >= rotations) {
        let element = arr[index];
        resultArr.push(element);
    }
}
for (let index in arr) {
   
    if (index < rotations) {

        let element = arr[index];
        resultArr.push(element);

    }else{
        break;
    }
}
console.log(resultArr.join(" "));

}

arrRotation([2, 4, 15, 31], 5
);