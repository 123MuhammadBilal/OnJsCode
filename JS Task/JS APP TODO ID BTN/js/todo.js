// ====================================TODO APP=================================

// load everything before execution
window.addEventListener("load", () => {
  const mainDelBtn = document.getElementById("mainDelBtn");
  const inputText = document.getElementById("inputText");
  const submitBtn = document.getElementById("submitBtn");
  const myForm = document.getElementById("myForm");
  const ulListing = document.getElementById("myList");
  const updateBtn = document.getElementById("updateBtn");

  myForm.addEventListener("submit", (refresh) => {
    refresh.preventDefault();
    document.getElementById("audios").play();

    //creating a <li> tag
    const newList = document.createElement("li");
    const mainId = Math.random();
    newList.id = mainId;

    //creating a <p> tag
    const newParagraph = document.createElement("p");
    newParagraph.classList = "newParagraphStyling";
    const updater = (newParagraph.id = Math.random());

    // getting the input value to append in the <p> tag
    const paraghaphNode = document.createTextNode(inputText.value);

    // creating a delete button
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerHTML = "Delete";
    newDeleteBtn.classList = "newDeleteBtnStyling";
    newDeleteBtn.id = mainId;

    // creating a edit button
    const neweditBtn = document.createElement("button");
    neweditBtn.innerHTML = "Edit";
    neweditBtn.classList = "neweditBtnStyling";

    // creating a Check Box
    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newCheckBox.id = "newCheckBoxStyling";

    // appending all created Elements in the <li> tag
    newList.appendChild(newCheckBox);
    newParagraph.appendChild(paraghaphNode);
    newList.appendChild(newParagraph);
    newList.appendChild(newDeleteBtn);
    newList.appendChild(neweditBtn);

    // all appended childs are appending in <ul> tag
    ulListing.appendChild(newList);

    // del all appended <li> tags
    mainDelBtn.addEventListener("click", () => {
      document.getElementById("audio").play();
      ulListing.removeChild(newList);
    });

    //after submition input will emputy
    inputText.value = "";

    // working on delete button
    newDeleteBtn.addEventListener("click", () => {
      if (newCheckBox.checked) {
        ulListing.removeChild(document.getElementById(mainId));
      } else {
        alert("Please Check the Box");
      }
    });

    // working on edit button
    neweditBtn.addEventListener("click", () => {
      // applying the checkbox condition in edit button
      if (newCheckBox.checked) {
        inputText.value = document
          .getElementById(mainId)
          .innerText.slice(0, -12);
        submitBtn.style.display = "none";
        updateBtn.style.display = "block";
        //using Math.random() methode
        const newId = Math.random();
        // giving the new id to <p> tag to target
        newParagraph.id = newId;

        // working on the update button
        updateBtn.addEventListener("click", () => {
          const updatedParagraph = document.getElementById(newId);
          updatedParagraph.innerHTML = inputText.value;
          inputText.value = " ";
          newCheckBox.checked = false;
          submitBtn.style.display = "block";
          updateBtn.style.display = "none";
          newParagraph.id = " ";
        });
      } else {
        alert("check before");
      }
    });
  });
});

// Working on search

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
