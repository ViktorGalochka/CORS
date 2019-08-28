let form = document.querySelector("form");

form.addEventListener("submit", function(event){
	event.preventDefault();
	let textInp = document.querySelector(".text");
	
	fetch("http://localhost:3000", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		text: textInp.value
	})
})
.then((response) => response.text())
.then((data) => console.log(data))
})




let btn = document.querySelector(".show");

btn.addEventListener("click", function() {
	fetch("http://localhost:3000")
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(() => console.log("Some error..."));
})
