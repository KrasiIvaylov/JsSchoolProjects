function addItem() {
    const text = document.getElementById('newItemText').value;

    const li = document.createElement('li');
    li.textContent = text;

    const ul = document.getElementById('items');

    ul.appendChild(li);



}