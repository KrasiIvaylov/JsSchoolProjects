function solve(arr) {

   let result = arr.sort((a, b) => a.localeCompare(b)).map((name, index) =>{
            let result = `${index + 1}.${name}\n`;
            return result;
        })
    return result.join('');




}


console.log(solve(["John", "Bob", "Christina", "Ema"]));