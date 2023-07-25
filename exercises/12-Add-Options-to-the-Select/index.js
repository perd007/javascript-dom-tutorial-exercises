let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let select=document.getElementById("mySelect");
for(let i=0;i<countries.length;i++){
    let option=document.createElement("option");
    option.innerHTML=countries[i];
    select.appendChild(option);
}


select.addEventListener("change", (event) => {
  alert(event.target.value);
});