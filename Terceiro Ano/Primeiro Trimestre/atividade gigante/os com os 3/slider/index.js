document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slider img");
    let slideWidth = slides[0].clientWidth;
    let totalSlides = slides.length;
    let counter = 1;
    let direction = 1;
    setInterval(() => {
        // slider.style.transition = "transform 0.5s ease-in-out";
        // slider.style.transform = `translateX(${-slideWidth * counter}px)`;
        //counter++;
        if (counter === totalSlides -1 || counter === 0) {
            //counter += direction;
            direction *= -1;
            // setTimeout(() => {
            //     slider.style.transition = "none";
            //     slider.style.transform = `translateX(0px)`;
            //     counter = 0;
            // }, 500);
        }
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-slideWidth * counter}px)`;
    }, 2000);
});