let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let li=document.createElement("li");
	let ul=document.getElementById("myList")
	li.innerHTML="Forth element";
	ul.appendChild(li);
	//document.body.appendChild(parrafo);
	
});
