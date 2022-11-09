function changeSlide(slideToShow, slidesToHide){
    const slideElement = document.getElementById(slideToShow);
    slideElement.style.display = "block";
    slidesToHide.forEach(slide => {
        let slideElement = document.getElementById(slide);
        slideElement.style.animation = "fade-in 1s";
        slideElement.style.display = "none";
    })
}