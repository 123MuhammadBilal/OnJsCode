// ====================================TODO APP=================================

// load everything before execution
window.addEventListener("load", () => {
  const mainDelBtn = document.getElementById("mainDelBtn");
  const inputText = document.getElementById("inputText");
  const submitBtn = document.getElementById("submitBtn");
  const myForm = document.getElementById("myForm");
  const ulListing = document.getElementById("UL_LIST");
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

// getting the input value to append in the <p> tag
    const paraghaphNode = document.createTextNode(inputText.value);

// creating a delete button
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerHTML = "Delete";
    newDeleteBtn.classList = "newDeleteBtnStyling";
    newDeleteBtn.id = mainId;

// creating a edit button
    const neweditBtn = document.createElement("button");
    neweditBtn.innerHTML = "edit";
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
        alert("Please Tick The Box");
      }
    });




                        // SOLVE THE EDIT BUTTON








// working on edit button
    neweditBtn.addEventListener("click", () => {
      if (newCheckBox.checked) {
        newCheckBox.checked = false;
        inputText.value = document.getElementById(mainId).innerText.slice(0, -12);
        submitBtn.style.display = "none";
        updateBtn.style.display = "block";
        updateBtn.id=mainId;

// working on the update button
updateBtn.addEventListener("click", () => {
          submitBtn.style.display = "block";
          updateBtn.style.display = "none";
          
        });
      } else {
        alert("check before");
      }
    });
  });
});
