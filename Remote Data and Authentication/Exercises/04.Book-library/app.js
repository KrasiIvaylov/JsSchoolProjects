async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    return await response.json();
}


async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    document
        .querySelector('tbody')
        .innerHTML = Object
        .entries(books)
        .map(createRow).join('');
}

function createRow([id, book]) {
    return `<tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            </td>
        </tr>`;
}

async function createBook(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };
    await request('http://localhost:3030/jsonstore/collections/books' , {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });

    event.target.reset();
}

async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
    event.target.reset();
}

async function deleteBook(id) {
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete',
    });
    getAllBooks();
}

function start() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.getElementById('editForm').addEventListener('submit', updateBook);
    document.querySelector('table').addEventListener('click', handleTableClick);

    getAllBooks();
}

start();

function handleTableClick(event){
    if (event.target.className === 'editBtn'){
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';
        const bookId = event.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(bookId);
    }else if(event.target.className === 'deleteBtn'){
        const bookId = event.target.parentNode.parentNode.dataset.id;
        deleteBook(bookId);
    }
}

async function loadBookForEditing(id){
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);

    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;

}