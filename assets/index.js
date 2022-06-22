


fetch('http://localhost:3000/Books')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));