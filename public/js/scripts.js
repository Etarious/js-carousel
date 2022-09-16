
let images = ["nature1.jpg", "nature2.jpg", "nature3.jpg", "nature4.jpg"];

let count = 0;

let img = document.getElementById("img");

function next() {
    if (count >= images.length - 1) {
        count = 0
        img.src = "./public/img/" + images[count];
    }else{
        count++
        img.src = "./public/img/" + images[count];
    }
}



function previous() {
    if (count <= 0) {
        count = images.length - 1;
        img.src = "./public/img/" + images[count];
    }else{
        count--
        img.src = "./public/img/" + images[count];
    }
}