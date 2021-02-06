function solve(arr) {
    let split = [];
    for (let i = 0; i < arr.length; i++) {
        split.push(arr[i].split(' | '));
    }
    let storage = new Map;
    for (let i = 0; i < split.length; i++) {
        let cars = split[i];
        let [brand, model, quantity] = cars;
        if (!storage.has(brand)) {
            storage.set(brand, new Map());
        }
        if (!storage.get(brand).has(model)) {
            storage.get(brand).set(model, 0);
        }
        let value = Number(storage.get(brand).get(model))
        storage.get(brand).set(model, value + Number(quantity));
    }

    let resultString = [];

    for ([brand, model] of storage.entries()) {
        let output = `${brand}\n`;

        for (let [name, quantity] of model.entries()) {
            output += `###${name} -> ${quantity}\n`;
        }
        // let model = brand.value();

        resultString.push(output.trim());
    }


    return resultString.join('\n');
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))