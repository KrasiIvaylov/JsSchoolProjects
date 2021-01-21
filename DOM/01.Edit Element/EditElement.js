function editElement(a, b, c) {

    const matcher = new RegExp(b, 'g');
    const result = a.textContent.replace(matcher, c);
    a.textContent = result;

}