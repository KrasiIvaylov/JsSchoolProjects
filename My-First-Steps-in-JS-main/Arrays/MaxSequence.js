function maxSequence(arr){

    let baseIndex = 0;
    let bestSequence = [];

    for (let index = baseIndex; index < arr.length; index++) {
        let element = arr[index];
        let currentSequence = [element];

        for (let i = index + 1; i < arr.length; i++){
            let nextElement = arr[i];
            baseIndex++;

            if (element === nextElement){
                currentSequence.push(nextElement);

            }else{
                break;
            }

        }
        if (currentSequence.length > bestSequence.length){
            bestSequence = currentSequence;
        }
    }
    console.log( bestSequence.join(" "));

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
