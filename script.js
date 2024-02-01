let togglebtn = document.getElementById("toggle-btn");
let body = document.body;

togglebtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
})