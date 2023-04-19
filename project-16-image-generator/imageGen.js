const input = document.getElementById("inpur");
const grid = document.getElementsByClassName("grid")[0];

//The below will call the dayNightMode function as soon as the page loads
window.addEventListener("load", dayNightMode);


input.addEventListener('keydown', function(event){
    if(event.key === "Enter")
    loadImg();
})

function loadImg(){

}

//The below function will remove all images from the screen, this will be used when the user puts in a new search by setting the grids in the innerhtml to an empty string.
function removeImages(){
    grid.innerHTML = "";
}


//The below is the function in which I will have the webpage auto change the day or night mode by using Date() & getHours() functions within JS. Then I will apply an if statement using the date and time for JS to render the page in day mode by amending the css style if hours between 7am - 19pm, otherwise it will display the page in nightmode.
function dayNightMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
    }
    else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}