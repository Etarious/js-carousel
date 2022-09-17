/**
 * ========================================
 * A SIMPLE CAROUSEL BUILT WITH JS
 * ========================================
 * 
 * It's not the best version of carousel, it can still undergo refactoring from time to time...
 * It's main purpose is for turorial and for students to study with it...
*/


// First things we did is to get the array of all the images in our preoject that is going to be used...
let images = ["nature1.jpg", "nature2.jpg", "nature3.jpg", "nature4.jpg"];

// Next, we need a count, so as to be able to know exactly where we are in the array.
// The count works more as the index to the array...
let count = 0;

// Next, we get the ellemt that is going to be displayed, whose src is going to be dynamically changed...
let img = document.getElementById("img");

// This is used to get the circular indicators which are located below the image...
let pointers = document.querySelectorAll(".point");
// console.log(pointers[0].dataset.point);


// We use this for loop to always check through the indcators to know if any of them has a click event at anytime...
for (let i = 0; i < pointers.length; i++) {
    pointers[i].addEventListener("click", () => {
        // console.log(pointers[i].dataset.point);
        for (let i = 0; i < pointers.length; i++) {
            const poin = pointers[i];
            poin.classList.remove("active");
        }
        pointers[i].classList.add("active");
        count = pointers[i].dataset.point - 1;
        img.src = "./public/img/" + images[count];
    });
    
}




// This is used to set which of the pointers is active...
function pointer() {
    for (let i = 0; i < pointers.length; i++) {
        const point = pointers[i];
        if (img.dataset.index == point.dataset.point) {
            // console.log(point);
            point.classList.add("active");
        }else{
            point.classList.remove("active");
        }
    }
}




// This is used to go to the next image...
function next() {
    if (count >= images.length - 1) {
        count = 0
        img.src = "./public/img/" + images[count];
        img.dataset.index = count + 1;
        pointer()
    }else{
        count++
        img.src = "./public/img/" + images[count];
        img.dataset.index = count + 1;
        pointer()
    }
}




// This is used to go to the previous image...
function previous() {
    if (count <= 0) {
        count = images.length - 1;
        img.src = "./public/img/" + images[count];
        img.dataset.index = count + 1;
        pointer();
    }else{
        count--
        img.src = "./public/img/" + images[count];
        img.dataset.index = count + 1;
        pointer();
    }
}




// This section is actually optional, just to give it a little more spice...
// It is used to make the carousel automatic, and kinda a little bit intelligent
// to know when someone wants more time to look at the active image...
//===============================================================================

// This gets the ID of trhe interval in a variable, so it can further be targetted to clear it..
let interval;

// This function is used to start the setInterval timer when the mouse leaves the image...
function setInter(){
    interval = setInterval(() => {
        next();
    }, 5000);
}

// This function is used to stop the setInterval timer when the mouse is over the image...
function clearInter() {
    clearInterval(interval);
}
// This starts the interval timer on a default...
setInter();


// This triggers the interval stop function when the mouse is over the image...
img.addEventListener("mouseover", () => {
    // console.log("The image has been hovered over!");
    clearInter();
    interval = null;
});


// This triggers the interval start functio when the mouse has left the images...
img.addEventListener("mouseleave", () => {
    // console.log("The image has just experienced a mouseleave event!");
    setInter();
});



/**
 * ====================================
 * THE END
 * ====================================
 * I hope you had fun (*_-)
 */

