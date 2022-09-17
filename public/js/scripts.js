
let images = ["nature1.jpg", "nature2.jpg", "nature3.jpg", "nature4.jpg"];

let count = 0;

let img = document.getElementById("img");

let pointers = document.querySelectorAll(".point");
// console.log(pointers[0].dataset.point);



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
// pointer();



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



setInterval(() => {
    next();
}, 5000);