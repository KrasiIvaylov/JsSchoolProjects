function addItem() {



    let itemsListElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');

    liElement.innerHTML = inputElement.value;

    itemsListElement.appendChild(liElement);
    inputElement.value = '';

    console.log('TODO:...');

}