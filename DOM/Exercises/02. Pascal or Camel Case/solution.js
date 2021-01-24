function solve(str) {
    const input = document.querySelector('body form div input ');
    const convention = document.querySelector('body form div:nth-child(2) input');


    // secOND eXamPLE  Fj
    let convertedWord = input.value.toLocaleLowerCase();
    while (convertedWord.indexOf(' ') !== -1) {
        const index = convertedWord.indexOf(' ');
        convertedWord = convertedWord.substring(0, index) +
                        convertedWord[index + 1].toLocaleUpperCase() +
                        convertedWord.substring(index + 2);
    }

    if (convention.value === 'Pascal Case'){
        convertedWord = convertedWord[0].toLocaleUpperCase() +
        convertedWord.substring(1);
    } else if (convention.value === 'Camel Case'){

    }else{
        convertedWord = 'Error!';
    }

    let result = document.querySelector('body div #result');
    result.textContent = convertedWord;
}