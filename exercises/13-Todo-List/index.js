// Your code here
let input=document.getElementById("addToDo");
let i=document.querySelectorAll("i");
let ul=document.querySelector("ul");

//agregamos la tarea
input.addEventListener("keyup", (event) => {
    if(event.code=="Enter"){
        //alert(event.target.value);
        let ul=document.querySelector("ul");
        let li=document.createElement("li");
        li.innerHTML="<span><i class='fa fa-trash'></i></span>"+event.target.value;
        ul.appendChild(li);

    }

});

//eliminamos la tarea

i.addEventListener("click", (event) =>{
    alert("click");
})
/*
let ul = document.querySelector('#parentLi')
let  li= ul.childNodes[3];//li,s
ul.removeChild(li);
*/



