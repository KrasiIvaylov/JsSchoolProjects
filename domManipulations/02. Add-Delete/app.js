function addItem() {
    let itemsListElement = document.getElementById('items');
    let inputElement = document.getElementById('newText');


    let liElement = document.createElement('li');
    liElement.innerHTML = `${inputElement.value}`;

    let deleteElement = document.createElement('span');
    deleteElement.innerText = ' [delete]';

    liElement.appendChild(deleteElement);


    deleteElement.addEventListener('click', function (e) {
        let parentElement = e.target.parentElement;

        parentElement.remove();
    });

    itemsListElement.appendChild(liElement);
    inputElement.value = '';
}