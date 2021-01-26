function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));


    for (let row of rows) {
        if (row.children[1].textContent == email){
            row.parentNode.removeChild(row);

            document.getElementById('result').textContent = 'Deleted.';
        }else{
            document.getElementById('result').textContent = 'Not found.';
        }
    }
}