// ====================================TODO APP=================================

// load everything before execution
window.addEventListener("load", () => {
  const mainDelBtn = document.getElementById("mainDelBtn");
  const inputText = document.getElementById("inputText");
  const submitBtn = document.getElementById("submitBtn");
  const myForm = document.getElementById("myForm");
  const ulListing = document.getElementById("UL_LIST");

  myForm.addEventListener("submit", (refresh) => {
    refresh.preventDefault();
    document.getElementById("audios").play();

    //creating a <li> tag
    const newList = document.createElement("li");
    const mainId = Math.random();
    newList.id=mainId;

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

    // creating a edite button
    const newEditeBtn = document.createElement("button");
    newEditeBtn.innerHTML = "Edite";
    newEditeBtn.classList = "newEditeBtnStyling";

    // creating a Check Box
    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newCheckBox.id="newCheckBoxStyling";

    // appending all created Elements in the <li> tag
    newList.appendChild(newCheckBox);
    newParagraph.appendChild(paraghaphNode);
    newList.appendChild(newParagraph);
    newList.appendChild(newDeleteBtn);
    newList.appendChild(newEditeBtn);


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

    // working on edite button
    newEditeBtn.addEventListener("click", () => {
      if (newCheckBox.checked) {
        // newCheckBox.checked = false;
       inputText.value = document.getElementById(mainId).innerText.slice(0, -12);
        submitBtn.style.display = "none";
        //   creating a edite button
        const newUpdateBtn = document.createElement("input");
        newUpdateBtn.innerHTML = "Update";
        newUpdateBtn.value = "Update";
        newUpdateBtn.type = "button";
        newUpdateBtn.classList = "newSaveStyling";
        myForm.appendChild(newUpdateBtn);

        // working on the update button
        newUpdateBtn.addEventListener("click", () => {
            const mainUpatingList = document.getElementById(mainId);
            mainUpatingList.querySelector('.newParagraphStyling').innerHTML = inputText.value;
            submitBtn.style.display = "block";
            newUpdateBtn.style.display="none";
            inputText.value="";
          });          
      } else {
        alert("check before");
      }
    });
  });
});
