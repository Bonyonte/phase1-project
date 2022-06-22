
let url = 'http://localhost:3000/Books'



fetch(url)
	.then(response => response.json())
	.then(data => {

		let html = ""

		data.map((value) => {
			html += `
			 <div class = "col.md-9">
			 <div class="card">
                      <h4 class="title">Title: ${value.title}</h4>
                      <h4 id="author">Author: ${value.author}</h4>
            //     <img class="card-img-top" src="${value.imgUrl}" alt="Card image" style="width:70%">
            //     <div class="card-body">
            //       <a href="#" class="btn btn-primary">Price: ${value.price}</a>
			// 	  <h4>Review: ${value.review}</h4>
            //       <p class="card-text">${value.description}</p>
			// 	  <h4>Source: ${value.source} </h4>
            //     </div>
            // </div>
			// </div>
			`
		})

		document.getElementById('container').innerHTML = html
	})

	.catch((err) = console.log(err))
	