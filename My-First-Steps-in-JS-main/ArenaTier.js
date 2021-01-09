function solve(input) {
    let obj = {};
 
    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        }
        let element = line.split(' ');
        if (element[1] === '->') {
            let theLine = line.split(' -> ');
            let gladiator = theLine[0];
            let technique = theLine[1];
            let skillAmount = Number(theLine[2]);
            if (!obj.hasOwnProperty(gladiator)) {
                obj[gladiator] = {};
            }
            if (!obj[gladiator].hasOwnProperty(technique)
                || obj[gladiator][technique] < skillAmount) {
                obj[gladiator][technique] = skillAmount;
            }
        } else if (element[1] === 'vs') {
            let theLine = line.split(' vs ');
            let gladiator1 = theLine[0];
            let gladiator2 = theLine[1];
            if (obj.hasOwnProperty(gladiator1)
                && obj.hasOwnProperty(gladiator2)) {
                let gladiator1Techniques = (obj[gladiator1]);
                let gladiator2Techniques = (obj[gladiator2]);
                for (const key in gladiator1Techniques) {
 
                    if (gladiator2Techniques.hasOwnProperty(key)) {
                        if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
                            delete obj[gladiator2];
                        } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
                            delete obj[gladiator1];
                        }
                    }
                }
            }
        }
    }
    for (const key in obj) {
        let sum = 0;
        let outsideObj = obj[key];
        for (const insideKey in outsideObj) {
            sum += outsideObj[insideKey];
        }
        outsideObj['sum'] = sum;
    }
    console.log(obj);
 
    Object.entries(obj)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].sum} skill`);
            delete element[1].sum;
            Object.entries(element[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(element => {
                    console.log(` - ${element[0]} <!> ${element[1]}`);
                });
        });
}