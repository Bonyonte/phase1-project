
let url = 'http://localhost:3000/Books'



fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data)

		let html = ""

		data.map((value) => {
			html += `


			`
		})
	})
	