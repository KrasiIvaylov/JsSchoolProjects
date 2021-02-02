function solve(area, vol, dataAsJSON) {
    const figures = JSON.parse(dataAsJSON);

    const result = [];

    for (let figure of figures) {

        const objArea = area.call(figure);
        const objVol = vol.call(figure);

        const output = {
            area: objArea ,
            volume: objVol
        };
        result.push(output);
    }
    return result;
}

const example = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

    console.log(solve(area, vol, example));
    




area()
function area() {
    return this.x * this.y;
};

vol()
function vol() {
    return this.x * this.y * this.z;
};
