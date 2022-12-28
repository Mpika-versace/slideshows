const next= document.querySelector(".fa-chevron-right");
const prev= document.querySelector(".fa-chevron-left");
const mySlides= document.querySelectorAll(".slides");

let currentSlide = 0;
let totalSlides = mySlides.length;


next.addEventListener("click",showSlides);
prev.addEventListener("click",showSlidesPrev);



function showSlidesPrev() {

    mySlides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    mySlides[currentSlide].classList.add("active") 
}

function showSlides() {
    
    mySlides[currentSlide].classList.remove("active")
 
    currentSlide = (currentSlide + 1) % totalSlides
 
    mySlides[currentSlide].classList.add("active")
    console.log(currentSlide);
     
 };

 setInterval(showSlides,4000);