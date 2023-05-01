// get the input elements
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");
const searching = document.getElementById("searching");
const mainDelBtn = document.getElementById("mainDelBtn");
const myList = document.getElementById("myList");
const first = document.getElementById("first");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const last = document.getElementById("last");

/** 
    creating array
*/
let myData = JSON.parse(localStorage.getItem("myData")) || [];

/** 
    on window load function to call all element from local storage 
*/

// display the saved list items
function loadDom() {
myData.forEach((obj) => {
    const listItem = `<li>
      <input type="checkbox" />
      <p id="${obj.id}">${obj.title}</p>
      <div>
          <a id="${obj.id}">✎</a>
          <a id="${obj.id}">🗑</a>
      </div>
  </li>`;
    myList.insertAdjacentHTML("beforeend", listItem);
  });  
}
loadDom()

/** 
    working on submit button 
*/
submitBtn.addEventListener("click", () => {
  const obj = {
    id: Math.random() * 100,
    title: inputText.value,
    complete: false,
  };
  myData.push(obj);
  localStorage.setItem("myData", JSON.stringify(myData));

  const listItem = `<li>
<input type="checkbox" />
<p id="${obj.id}">${obj.title}</p>
<div>
<a id="${obj.id}" onclick="editItem(event)">✎</a>
<a id="${obj.id}" onclick="deletItem(event)">🗑</a>
</div>
</li>`;
  myList.insertAdjacentHTML("beforeend", listItem);

  inputText.value = "";
});

/** 
    clearing the localStorage / myList.innerHTML / and Array
*/
mainDelBtn.addEventListener("click", () => {
  myList.innerHTML = "";
  myData = [];
  localStorage.clear();
});


/** 
    delet item function
*/
function deletItem(event) {
  const id = event.target.id;
  console.log(id);

  const dataObjectsData = myData.filter((obj) => obj);
  const index = dataObjectsData.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    alert("matched");
    myData.splice(index, 1);
    localStorage.setItem("myData", JSON.stringify(myData));
    event.target.parentElement.parentElement.remove();
    loadDom();
  }
}



function editItem(event) {
  const id = event.target.id;
  alert(id);
}
