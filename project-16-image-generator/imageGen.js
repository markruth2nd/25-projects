const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

//The below will call the dayNightMode function as soon as the page loads
window.addEventListener('load', dayNightMode);

//The below function will register when the user presses the enter key after adding their search in the search box which will then intrun run the loadImg() function.
input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
    loadImg();
})

function loadImg(){
    removeImages();

    //This will be the URL which is used for the page to load the images from the Unsplash API requesting 20 photos per request. The input.vlue will be the users search and my API key has been add at he end of the url created as the client ID
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=20&client_id=e1zulXfjCefdiAxIa0jCcbwIp-eqo5DTjz4Bp6b16tM';
    
    //using fetch will make the request to the URL
    fetch('https://api.unsplash.com/search/photos/?query=CHICKEN&per_page=20&client_id=-R6ETRtjnDaxnEtESeBjACkO8b9xuYKwX55zmFSAPdM', {
    mode: 'no-cors'})

    //The below is a promise which will make the request
    .then(response =>{
        if(response.ok)
        return response.json();
        else
        //This alert should tell me why the request was not successful
        alert(response.status);
    })
        //The below finction will put all the response images into an array ready to be placed into a div element. Using a for loop the function will generate the 20 photo's from the API from each url provided in the data's results and then using the imageNodes[i]'s I will create each img element, url for each image as well as add a double click event listener so that the user can load the image in a larger format and save it if they wish to do so.
        .then(data =>{
            const imageNodes =[];
            for(let i = 0; i < data.results.length; i++){
                imageNodes[i] = document.createElement('div');
                imageNodes[i].className = 'img';
                imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
                imageNodes[i].addEventListener('dblclick', function(){
                    window.open(data.results[i].links.download, '_blank');
                })
                grid.appendChild(imageNodes[i]);
            }
        });
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

//AS I HAVE FOUND REVIOUSLY USING UNSLPASH API'S, THIS API IS NOT LOADING AS EXPECTED ADVISEING THE FOLLOWING ERROR:
/* has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled. */
//I WILL NEED TO LOOK INT THIS FURTHER AS IT IS THE CAUSE IS AS FOLLOWS; This error message indicates that a request to the Unsplash API has been blocked by the browser's Cross-Origin Resource Sharing (CORS) policy. CORS is a security feature implemented by web browsers to prevent scripts from making requests to resources from different domains.

/* one example idea is as follows which I will try and implement:

fetch('https://api.unslpash.com/search/photos/?query=CHICKEN&per_page=20&client_id=e1zulXfjCefdiAxIa0jCcbwIp-eqo5DTjz4Bp6b16tM', {
  mode: 'no-cors'
})
.then(response => {
  ++ Handle the response here
})
.catch(error => {
  ++ Handle the error here
});

*/