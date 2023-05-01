// get the input elements
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const newUpdateBtn = document.getElementById("updateBtn");
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
myData.forEach((element) => {
  const li = document.createElement("li");

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";

  const newParagraph = document.createElement("p");
  newParagraph.innerText = element.title;
  newParagraph.id = element.id;

  const div = document.createElement("div");

  const newDeleteBtn = document.createElement("a");
  newDeleteBtn.innerHTML = "🗑";
  newDeleteBtn.id = element.id;

  const newEditBtn = document.createElement("a");
  newEditBtn.innerHTML = "✎";
  newEditBtn.id = element.id;

  li.appendChild(newCheckBox);
  li.appendChild(newParagraph);
  li.appendChild(div);
  div.appendChild(newEditBtn);
  div.appendChild(newDeleteBtn);
  myList.appendChild(li);

  inputText.value = "";

  /** 
    delet item function
*/
newDeleteBtn.addEventListener('click', (event) => {
  const thisBtnId = event.target.id;
  document.getElementById(thisBtnId).parentNode.remove();
  console.log(thisBtnId);
  const index = myData.findIndex((item) => item.id == thisBtnId);
  console.log(index);
  if (index !== -1) { 
    myData.splice(index, 1); 
    localStorage.setItem('myData', JSON.stringify(myData));
    
  }
});


  /** 
    update item function
*/
newEditBtn.addEventListener('click', (event) => {
  if (newCheckBox.checked) {
    newCheckBox.checked = false;
    newUpdateBtn.style.display="block";
    submitBtn.style.display="none";
   
  let thisBtnId = event.target.id;
  inputText.value = document.getElementById(thisBtnId).innerHTML;
  
  newUpdateBtn.addEventListener('click', () => {
    console.log(thisBtnId);
    document.getElementById(thisBtnId).innerHTML = inputText.value;
    
    const index = myData.find((item) => item.id == event.target.id );
    if (index) { 
      index.title = inputText.value; 
      localStorage.setItem('myData', JSON.stringify(myData));
    }
    thisBtnId = "";
    inputText.value = "";
    newUpdateBtn.style.display="none";
    submitBtn.style.display="block";
  }); 
  } else {
    alert('please check the box');
  }
});

});  
}
loadDom()

/** 
    working on submit button 
*/
submitBtn.addEventListener("click", () => {
  const element = {
    id: Math.random() * 100,
    title: inputText.value,
    complete: false,
  };
  myData.push(element);
  localStorage.setItem("myData", JSON.stringify(myData));

  const li = document.createElement("li");

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";

  const newParagraph = document.createElement("p");
  newParagraph.innerText = element.title;
  newParagraph.id = element.id;

  const div = document.createElement("div");

  const newDeleteBtn = document.createElement("a");
  newDeleteBtn.innerHTML = "🗑";
  newDeleteBtn.id = element.id;

  const newEditBtn = document.createElement("a");
  newEditBtn.innerHTML = "✎";
  newEditBtn.id = element.id;

  li.appendChild(newCheckBox);
  li.appendChild(newParagraph);
  li.appendChild(div);
  div.appendChild(newEditBtn);
  div.appendChild(newDeleteBtn);
  myList.appendChild(li);

  inputText.value = "";

  /** 
    delet item function
*/
newDeleteBtn.addEventListener('click', (event) => {
  const thisBtnId = event.target.id;
  document.getElementById(thisBtnId).parentNode.remove();
  console.log(thisBtnId);
  const index = myData.findIndex((item) => item.id == thisBtnId);
  console.log(index);
  if (index !== -1) { 
    myData.splice(index, 1); 
    localStorage.setItem('myData', JSON.stringify(myData));
    
  }
});


  /** 
    update item function
*/
newEditBtn.addEventListener('click', (event) => {
  if (newCheckBox.checked) {
    newCheckBox.checked = false;
    newUpdateBtn.style.display="block";
    submitBtn.style.display="none";
   
  let thisBtnId = event.target.id;
  inputText.value = document.getElementById(thisBtnId).innerHTML;
  
  newUpdateBtn.addEventListener('click', () => {
    console.log(thisBtnId);
    document.getElementById(thisBtnId).innerHTML = inputText.value;
    
    const index = myData.find((item) => item.id == event.target.id );
    if (index) { 
      index.title = inputText.value; 
      localStorage.setItem('myData', JSON.stringify(myData));
    }
    thisBtnId = "";
    inputText.value = "";
    newUpdateBtn.style.display="none";
    submitBtn.style.display="block";
  }); 
  } else {
    alert('please check the box');
  }
});




});

/** 
    clearing the localStorage / myList.innerHTML / and Array
*/
mainDelBtn.addEventListener("click", () => {
  myList.innerHTML = "";
  myData = [];
  localStorage.clear();
  inputText.value="";
});

