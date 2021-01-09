function mergeArrays(arr1, arr2){

let resultArr = [];

for(let index in arr1){
    let result;
    let arrOneElement = arr1[index];
    let arrTwoElement = arr2[index];

    if (index % 2 === 0) {
        result = ( Number(arrOneElement) + Number(arrTwoElement)) + "";
    }else{
        result = arrOneElement + arrTwoElement;
    }

    resultArr.push(result);

}

console.log(resultArr.join(' - '));


}


mergeArrays
(['13', '12312', '5', '77', '4'],
 ['22', '333', '5', '122', '44']
);