// function to run when page loads
(function() {
	localStorage.setItem("Devloper","DEVELOPER\nMUHAMMAD BILAL")
})();

/*========================[ IT'S ONLY FOR NEVIGATION BAR']==========================*/

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