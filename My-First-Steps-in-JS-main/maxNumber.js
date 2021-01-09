function maxNumber(arr){

    let result = '';

    for(let index = 0; index < arr.length; index++){

        let element = arr[index];
        let isBiggerEnough = true; 

        for(let i = index + 1; i < arr.length; i++){
            let nextElement = arr[i];
            
            if (element <= nextElement) {
                isBiggerEnough = false;
                break;
            }
        }
        if (isBiggerEnough) {
            result += `${element} `;
        }
    }
    console.log(result);
}

maxNumber([14, 24, 3, 19, 15, 17]);
