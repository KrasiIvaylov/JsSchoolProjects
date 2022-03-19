function loadRepos() {
   const username = document.getElementById('username').value;

   const url = `https://api.github.com/users/${username}/repos`;
   const requestPromise = fetch(url);

   console.log(requestPromise);

   requestPromise.then(handleResponse);

   function handleResponse(response) {
      console.log(response);
      const dataPromise = response.json();
      dataPromise.then(handleResponse);
   }

   function handleData(data) {
      console.log(data);
   }
}