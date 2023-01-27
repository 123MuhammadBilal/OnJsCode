var x = document.getElementById('cont').innerText=localStorage.getItem("COUNTER");
function cou() {
	x++;
	localStorage.setItem("COUNTER",x);
	var inner=document.getElementById('cont').innerText=localStorage.getItem("COUNTER");
}
function recount(){
	x = 0;
	localStorage.setItem("COUNTER",x);
	var inner=document.getElementById('cont').innerText=localStorage.getItem("COUNTER");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function them() {
	var element = document.getElementById("them");
   element.classList.toggle("them");
}

