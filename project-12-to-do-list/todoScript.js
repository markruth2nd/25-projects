const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if(event.key === "enter")addItem();
})

function addItem(){
    var divParent = document.createElement("div")
    var divChild = document.createElement("div")
    var checkIcon = document.createElement("i")
    var trashIcon = document.createElement("i")

    divParent.className = "item";
    divParent.innerHTML = "<div>"+input.value+"<div>";

    checkIcon.className = "fas fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "lightsalmon";
    });

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash-can";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    });

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent)

    input.value = "";
}
