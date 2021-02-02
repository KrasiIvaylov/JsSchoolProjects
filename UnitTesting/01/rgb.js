function rgb(...rgb) {
    if (rgb.some(c => typeof c != 'number')){
        return undefined;
    }

    return  '#' + rgb.map(decToHex).join('').toUpperCase();

    function decToHex(n) {
        return n.toString(16);
    }
}
module.exports = rgb;