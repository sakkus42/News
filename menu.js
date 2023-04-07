let menu_click = document.querySelector(".menu-icon");
let	menu_close = document.querySelector(".close");
let	menu = document.querySelector('ul');

menu_click.addEventListener("click", function(){
	menu.style.display = "flex";
});

menu.addEventListener("click", function(){
	menu.style.display = "none";
})