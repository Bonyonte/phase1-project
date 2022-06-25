
let url = 'http://localhost:3000/Books'
const body = document.querySelector('#body')
console.log(body.parentNode);
body.parentNode.style.backgroundColor = '#f4f4f4';
const comment = document.querySelector('textarea');
const backUp = comment.getAttribute('placeholder');
const btn = document.querySelector('btn');
const clear = document.getElementById('clear')
fetch(url)
	.then(response => response.json())
	.then(data => {

		let html = ""

		data.map((value) => {
			html += `
			 <div class = "col.md-9">
			 <div class="card">
                      <h4 class="title"><span>Title</span>: ${value.title}</h4>
                      <h4 id="author"><span>Author</span>: ${value.author}</h4>
                   <img class="card-img-top" src="${value.imgUrl}" alt="Card image" style="width:90%">
                 <div class="card-body">
                   <h4><span>Price: ${value.price}</span></h4>
			 	  <h4><span>Review</span>: ${value.review}</h4>
                   <p class="card-text">${value.description}</p>
			 	  <h4><span>Source</span>: ${value.source} </h4>
                </div>
             </div>
			 </div>
			`
		})

		document.getElementById('container').innerHTML = html
	})
	comment.onfocus = function(){
		this.setAttribute('placeholder', '');
		this.style.borderColor = '#333'
		btn.style.display = 'block'
	}

	comment.onblur = function(){
		this.setAttribute('placeholder', backUp)
		this.style.borderColor = '#aaa'
	}

	clear.onclick = function(){
		btn.style.display = 'none';
		comment.value = '';
	}

	function alertBtn (){
		alert('You are canceling your comment');
	}
	clear.addEventListener('click', alertBtn);
	