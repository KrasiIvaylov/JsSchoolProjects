function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;

        await sendMessage({author, content});

        document.getElementById('author').value = '';
        document.getElementById('content').value = '';

        getMessages();
    });

    document.getElementById('refresh').addEventListener('click', getMessages);

    getMessages();
}

attachEvents();

async function getMessages(){
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    document.getElementById('messages').value = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');
}

async function sendMessage(message){
    const response = await fetch('http://localhost:3030/jsonstore/messenger',{
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    });
    const data = await response.json();
}