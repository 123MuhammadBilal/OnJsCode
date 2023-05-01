const searching = document.getElementById("searching");
const mainDelBtn = document.getElementById("mainDelBtn");
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");
const myList = document.getElementById("myList");
const paginationfirst = document.getElementById("first");
const paginationprevious = document.getElementById("previous");
const paginationnext = document.getElementById("next");
const paginationlast = document.getElementById("last");


// creating a array
let myData = [];
// let myData = JSON.parse(localStorage.getItem('myData')) || [];
console.log(myData);

mainDelBtn.addEventListener("click", () => {
  myList.innerHTML = "";
  myData = [];
  localStorage.clear();
});

submitBtn.addEventListener("click", () => {
  // document.getElementById("first").click();
  myList.innerHTML = "";
  if (inputText.value !== "") {
    const obj = {
      id: Math.random() * 100,
      title: inputText.value,
      complete: false,
    };
// localStorage.setItem('myData', JSON.stringify(myData));
myData.push(obj);
console.log(myData);



    const filteredData = myData.filter((obj) => obj);

    for (let i = 0; i < filteredData.length; i++) {
      const element = filteredData[i];
      itemTitle = element.title;
function appendingElements() {
  const li = document.createElement("li");

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";

  const newParagraph = document.createElement("p");
  newParagraph.innerText = itemTitle;
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

  newDeleteBtn.addEventListener("click", () => {
    if (newCheckBox.checked) {
      const index = filteredData.findIndex((obj) => obj.id == newParagraph.id);
      if (index !== -1) {
        filteredData.splice(index, 1);
        document.getElementById(newParagraph.id).parentNode.remove();
      } else {
        alert("not found");
      }
    } else {
      alert("Please Check the Box");
    }
  });

  newEditBtn.addEventListener("click", () => {
    if (newCheckBox.checked) {
      newCheckBox.checked = false;
      inputText.value = newParagraph.innerHTML;
      idToUpdate = element.id;
      console.log(idToUpdate);
      submitBtn.style.display = "none";
      updateBtn.style.display = "block";
    } else {
      alert("Please Check the Box");
    }
  });

  updateBtn.addEventListener("click", () => {
    const myObject = myData.find((element) => element.id == idToUpdate);
    // find returns undefin if it cant find
    if (myObject !== undefined) {
      myObject.title = inputText.value;
      document.getElementById(idToUpdate).innerHTML = inputText.value;
      submitBtn.style.display = "block";
      updateBtn.style.display = "none";
      inputText.value = "";
      idToUpdate = "";
    }
  });
}
appendingElements();
    }
    inputText.value = "";

    // working on seach
    const searchFilter = document.getElementById("searching");
    searchFilter.addEventListener("keyup", () => {
      myList.innerHTML = "";
      const filteredData = myData.filter((obj) =>
        obj.title.includes(searchFilter.value)
      );
      console.log(filteredData);

      for (let i = 0; i < filteredData.length; i++) {
        const element = filteredData[i];
        itemTitle = element.title;
        appendingElements();
      }
    });

    /**
 calling element from loacl storage and appending using loop
 */
 window.addEventListener("DOMContentLoaded", () => {
  if (myData.length >= 0) {
    myData.forEach((item) => {
      const li = document.createElement("li");

      const newCheckBox = document.createElement("input");
      newCheckBox.type = "checkbox";

      const newParagraph = document.createElement("p");
      newParagraph.innerText = item.title;
      newParagraph.id = item.id;

      const div = document.createElement("div");

      const newDeleteBtn = document.createElement("a");
      newDeleteBtn.innerHTML = "🗑";
      newDeleteBtn.id = item.id;

      const newEditBtn = document.createElement("a");
      newEditBtn.innerHTML = "✎";
      newEditBtn.id = item.id;

      li.appendChild(newCheckBox);
      li.appendChild(newParagraph);
      li.appendChild(div);
      div.appendChild(newEditBtn);
      div.appendChild(newDeleteBtn);
      myList.appendChild(li);
    });
  }
});

  } else {
    alert("Please Enter a Task");
  }

  let currentPage = 1;
  const PerPageitems = 2;

  paginationfirst.addEventListener("click", () => {
    myList.innerHTML = "";
    const filteredData = myData.filter((obj) => obj);
    const spliceData = filteredData.splice(0, PerPageitems);
    console.log(spliceData);
    for (let i = 0; i < spliceData.length; i++) {
      const element = spliceData[i];
      itemTitle = element.title;
      appendingElements();
    }
  });

  paginationprevious.addEventListener("click", () => {
    if (currentPage === 1) {
      paginationprevious.disabled = true;
      paginationprevious.style.cursor = "not-allowed";
    }
    myList.innerHTML = "";
    const filteredData = myData.filter((obj) => obj);
    currentPage--;
    const startIndex = (currentPage - 1) * PerPageitems;
    const endIndex = startIndex + PerPageitems;
    const spliceData = filteredData.slice(startIndex, endIndex);
    console.log(spliceData);
    for (let i = 0; i < spliceData.length; i++) {
      const element = spliceData[i];
      itemTitle = element.title;
      appendingElements();
    }
    paginationnext.disabled = false;
    paginationnext.style.backgroundColor = "#b3b3b3ba";
    paginationnext.style.cursor = "pointer";

    //   paginationprevious.style.backgroundColor = '#F5F5F5';
    //   paginationprevious.style.cursor = 'none';
    // }
  });

  paginationnext.addEventListener("click", () => {
    myList.innerHTML = "";
    const filteredData = myData.filter((obj) => obj);
    const startIndex = currentPage * PerPageitems;
    const endIndex = startIndex + PerPageitems;
    const spliceData = filteredData.slice(startIndex, endIndex);
    console.log(spliceData);
    for (let i = 0; i < spliceData.length; i++) {
      const element = spliceData[i];
      itemTitle = element.title;
      appendingElements();
    }
    paginationprevious.disabled = false;
    paginationprevious.style.backgroundColor = "#b3b3b3ba";
    paginationprevious.style.cursor = "pointer";

    if (endIndex >= myData.length) {
      paginationnext.disabled = true;
      paginationnext.style.cursor = "not-allowed";
    }
    currentPage++;
  });

  paginationlast.addEventListener("click", () => {
    myList.innerHTML = "";
    const filteredData = myData.filter((obj) => obj);
    const spliceData = filteredData.splice(-PerPageitems);
    console.log(spliceData);
    for (let i = 0; i < spliceData.length; i++) {
      const element = spliceData[i];
      itemTitle = element.title;
      appendingElements();
    }
  });
});
