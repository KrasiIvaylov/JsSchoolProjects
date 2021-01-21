function extractText() {


    const liElements =  [...document.getElementsByTagName('li')];
    
    const elementsText = liElements.map(e => e.textContent);

    document.getElementById('result').value = elementsText.join('\n');

}