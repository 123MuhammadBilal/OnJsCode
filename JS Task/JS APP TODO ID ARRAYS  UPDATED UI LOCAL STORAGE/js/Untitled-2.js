// ====================================TODO APP=================================

function onSearch() {
  const searching = document.getElementById("searching");
  const myList = document.getElementById("myList");
  const liList = myList.getElementsByTagName("li");
  for (let i = 0; i < liList.length; i++) {
    const pTag = liList[i].getElementsByTagName("p")[0];
    const result = pTag.innerText;
    const finalItem = result.indexOf(searching.value);
    if (finalItem > -1) {
      //using 'parentNode' to access the child's parent
      pTag.parentNode.style.display = "";
    } else {
      pTag.parentNode.style.display = "none";
    }
  }
}

const btn = document.getElementById("submitBtn");
const input = document.getElementById("inputText");
const ulListing = document.getElementById("myList");

const myData = [];
btn.addEventListener("click", () => {
  myData.push({
    id: Math.random(),
    title: input.value,
    complete: false,
  });
  console.log(myData);
  for (let i = 0; i < myData.length; i++) {
    element = myData[i];
    elementId = element.id;
  }

  const li = document.createElement("li");
  const listId = (li.id = Math.random());

  //  creating a <p> tag
  const newParagraph = document.createElement("p");
  const nodeParagraph = document.createTextNode(element.title);
  newParagraph.id = elementId;

  // creating a delete button
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.innerHTML = "Delete";

  // creating a edit button
  const neweditBtn = document.createElement("button");
  neweditBtn.innerHTML = "Edit";

  // creating a Check Box
  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";

  li.appendChild(newCheckBox);
  newParagraph.appendChild(nodeParagraph);
  li.appendChild(newParagraph);
  li.appendChild(newDeleteBtn);
  li.appendChild(neweditBtn);

  ulListing.append(li);
  input.value = "";

  // del all appended <li> tags
  mainDelBtn.addEventListener("click", () => {
    ulListing.removeChild(li);
  });

  //     // working on delete button
  newDeleteBtn.addEventListener("click", () => {
    if (newCheckBox.checked) {
      ulListing.removeChild(document.getElementById(elementId));
    } else {
      alert("Please Check the Box");
    }
  });
  // working on edit button
  neweditBtn.addEventListener("click", () => {
    // applying the checkbox condition in edit button
    if (newCheckBox.checked) {
      inputText.value = document.getElementById(elementId).innerHTML;
      submitBtn.style.display = "none";
      updateBtn.style.display = "block";
      //using Math.random() methode
      const newId = Math.random();
      // giving the new id to <p> tag to target
      newParagraph.id = newId;

      // working on the update button
      updateBtn.addEventListener("click", () => {
    for (let i = 0; i < myData.length; i++) {
      const finalItem = myData[i];
      const titleId = finalItem.id;
      console.log("id__", titleId, elementId);

      if (titleId === elementId) {
        finalItem.title = input.value;

        document.getElementById(titleId).innerHTML=finalItem;
        input.value = "";
        submitBtn.style.display = "none";
        updateBtn.style.display = "block";
      }else{
        alert('wrong');
      }
    }
      });
    } else {
      alert("check the box");
    }
  });
});
