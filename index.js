//user story outline
    //create a basic slideshow using images from reddit
    //be sure to filter out offensive and not appropiate images - add 'nsfw:no' at end of search query
    //page should load with the following
        //a title
        //short description of what to do
        //blank text field
        //button : Search
    //next step when the user enters the search and presses the button
        //the form should hide
        //loading message
        //fetch the post related with the search
        //show images in slideshow : DOM manipulation
        //button to stop slideshow
        //slideshow on reapet untill stop button is pressed
    //stop button
        //stop the slideshow and remove images
        //show the form , tittle and description again
        //input another new search

// process
    // create form of HTML and CSS
    //assure the prevent default
    //verify form works
    //verify every process with console.log('')
    //create and array for the images url : filter and map
    //slideshow: setInterval
    //add style and animation
    //create the stop button : clearInterval


//get the container
const container=document.querySelector('#container')

//get the form
const form=document.querySelector('#form')

const onShowPicsSuccess=(carousel_slide)=>{
    console.log(carousel_slide)

    const singlePicture=document.querySelector('.single-pictures')

    if (singlePicture){
        singlePicture.remove()
    }

    container.style.display='none'

    //create a div
    const fewPicture=document.createElement('div')

    fewPicture.classList.add('single-pictures')

    fewPicture.innerHTML=`
        <h1>${pictures}</h1>
    
    `
}

const onShowPicsFailure=()=>{

}

//add the event
const showSlideShow=(event)=>{

    //get the data-url for the success function
    const picsRUL=event.target.getAttribute('data-url')

    //API call
    fetch(picsRUL)

        //turn the objects to json
        .then(res=>res.json())

        //handle the succes
        .then(onShowPicsSuccess)

        //handle the failure
        .catch(onShowPicsFailure)
}

const onGetPicsSuccess=(picsArray)=>{

    picsArray.data.children.forEach(pictures => {
        console.log(pictures)
    });
    
}

const onGetPicsFailure=()=>{
    console.log('Failure')
}

document.addEventListener('DOMContentLoaded',()=>{
    document .getElementById('search').addEventListener('submit',fetchfromReddit)

    document .getElementById('stop').addEventListener('click',stopSlide)

    //fetching from reddit
    fetch('https://www.reddit.com/search.json?q=${input.value}+nsf:no')

        //turning the fecth into json
        .then(res=>res.json())

        //sending the json to the then if succesfull
        .then(onGetPicsSuccess)

        //adding a catch for error
        .catch(onGetPicsFailure)
})