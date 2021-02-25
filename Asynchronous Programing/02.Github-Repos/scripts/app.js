async function loadRepos() {

	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	const response = await fetch(url);
	console.log(response);
	const data = await response.json();
	console.log('Promise fulfilled');
	console.log(data);

	const ulElement = document.getElementById('repos');
	ulElement.innerHTML = '';
	data.forEach(r => {
		const liElement = document.createElement('li');
		liElement.textContent = r.full_name;
		ulElement.appendChild(liElement);
	});

	/*

//	===> non async function

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const ulElement = document.getElementById('repos');
        ulElement.innerHTML = '';
        data.forEach(r => {
            const liElement = document.createElement('li');
            liElement.textContent = r.full_name;
            ulElement.appendChild(liElement);
        });
    });
     */
}
