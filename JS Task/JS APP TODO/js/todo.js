// ====================================TODO APP=================================

// load everything before execution
window.addEventListener('load',()=>{
    const mainDelBtn = document.getElementById('mainDelBtn');
    const inputText = document.getElementById('inputText');
    const submitBtn = document.getElementById('submitBtn');
    const myForm = document.getElementById('myForm');
    const UL_LIST = document.getElementById('UL_LIST');
    

    myForm.addEventListener('submit',(refresh)=>{
        refresh.preventDefault();
        document.getElementById("audios").play();

        //creating a <li> tag
        const newList = document.createElement('li');

        //creating a <p> tag
        const newParagraph = document.createElement('p');
        newParagraph.classList="newParagraphStyling"

        // getting the input value to append in the <p> tag
        const paragraphValue = document.createTextNode(inputText.value);

        // creating a delete button        
        const newDeleteBtn = document.createElement('button');
        newDeleteBtn.innerHTML="Delete";
        newDeleteBtn.classList="newDeleteBtnStyling";

        // creating a edite button
        const newEditeBtn = document.createElement('button');
        newEditeBtn.innerHTML="Edite";
        newEditeBtn.classList="newEditeBtnStyling"

        // creating a Check Box
        const newCheckBox = document.createElement('input');
        newCheckBox.type = "checkbox";


        // appending all created Elements in the <li> tag
        newList.appendChild(newCheckBox)
        newParagraph.appendChild(paragraphValue);
        newList.appendChild(newParagraph)
        newList.appendChild(newDeleteBtn)
        newList.appendChild(newEditeBtn)


        // all appended childs are appending in <ul> tag
        UL_LIST.appendChild(newList);


        // del all appended <li> tags
        mainDelBtn.addEventListener('click', () => {
            UL_LIST.removeChild(newList);
        })




        //after submition input will emputy
        inputText.value="";




        // working on delete button
        newDeleteBtn.addEventListener('click',()=>{
            if (!newCheckBox.checked) {
                UL_LIST.removeChild(newList);
            } else {
                alert('Please Tick The Box');
            }
        });

        // working on edite button
        newEditeBtn.addEventListener('click',()=>{
            submitBtn.value="Save"
            if (submitBtn.value="Save") {
                inputText.value = newParagraph.innerHTML;
            } else {
                
            }
        });









    })

});























function soundOnDel(){
	document.getElementById("audio").play();
}
function soundOnAdd() {
	
}