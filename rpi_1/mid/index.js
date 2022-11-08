function changeSlide(slideToShow, slidesToHide){
    document.getElementById(slideToShow).style.display = "block";
    slidesToHide.forEach(slide => {
        document.getElementById(slide).style.animation = "fade-in 1s";
        document.getElementById(slide).style.display = "none";


    })
}