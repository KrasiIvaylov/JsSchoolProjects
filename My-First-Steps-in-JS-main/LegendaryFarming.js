function solve(input) {
    let arr = input.split(' ');
    let materials = {};
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let winner = '';
    for (let i = 0; i <= arr.length - 1; i += 2) {
        let quantity = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();
        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            keyMaterials[material] += quantity;
            if (keyMaterials[material] >= 250 && material === 'shards') {
                winner = 'Shadowmourne';
                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === 'fragments') {
                winner = 'Valanyr';
                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === 'motes') {
                winner = 'Dragonwrath';
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if (!materials.hasOwnProperty(material)) {
                materials[material] = 0;
            }
            materials[material] += quantity;
        }
    }
    console.log(`${winner} obtained!`);
 
    let sortedkeyMaterials = Object.entries(keyMaterials);
 
    sortedkeyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
 
    let sortedMaterials = Object.entries(materials);
 
    sortedMaterials.sort((a, b) => a[0].localeCompare(b[0]));
 
    for (let [material, quantity] of sortedkeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }
    for (let [material, quantity] of sortedMaterials) {
        console.log(`${material}: ${quantity}`);
    }
}