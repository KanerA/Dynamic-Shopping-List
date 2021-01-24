const list = document.querySelector(".groceriesList");
const listInput = document.querySelector(".listInput");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    const deleteItemBtn = document.createElement('BUTTON');
    const liContent = document.createTextNode(listInput.value);
    const newLi = document.createElement('LI');
    listInput.value = "";
    deleteItemBtn.textContent = "delete";
    // -- attaching the text and button to the li -- //
    newLi.appendChild(liContent);  
    newLi.appendChild(deleteItemBtn);
    list.appendChild(newLi);
    // -- onclick function for delete button -- //
    deleteItemBtn.onclick = function(e){
        list.removeChild(newLi);
    }
    listInput.focus()
});
