function matcher(word, symbol, template){
    let result = word.replace('_', symbol);

    let hasMatch = result == template;

    if(hasMatch){
        console.log('Matched');
    }else{
        console.log('Not matched');
    }
}
matcher('Str_ng', 'o', 'Strong');