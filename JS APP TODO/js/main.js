function DELLALL(){
	document.getElementById("audio").play();
	localStorage.removeItem("list")
	alert("Items Deleted Successfully")
	window.location.replace("index.html");
}
function ADDLIST() {
	if (document.getElementById('input_text').value == "") {
		alert("Noting Is Written");
	}else{
	document.getElementById("audios").play();
  var inputBox = document.getElementById('input_text');
  var item = inputBox.value
  items.push({
    value:item,
  })
  localStorage.setItem('list', JSON.stringify(items));  
  listItems();
  inputBox.value = "";
}
}
var items = JSON.parse(localStorage.getItem('list')) || [];
function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li>" +items[i].value +"</li><br>";
  }
  document.getElementById("list").innerHTML = list;
}

// function to run when page loads
(function() {
	localStorage.setItem("Devloper","DEVELOPER\nMUHAMMAD BILAL")
  listItems();
})();list

/*========================[ T'S ONLY FOR NEVIGATION BAR']==========================*/

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