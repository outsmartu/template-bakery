let currentSlide = 1;
let n = 3;

showSlide(currentSlide);

// var all_slides = document.body.getElementsByClassName('slides')[0];
// const slides-collection = document.body.getElementsByClassName('slide');

function calcOffset(slideToShow){
    return (slideToShow - 1) * 300;
}

function prev(){
    // alert('show ' + (currentSlide - 1));
    currentSlide = currentSlide == 1 ? n : --currentSlide;
    showSlide(currentSlide);
    
}

function next(){
    // alert('show ' + (currentSlide + 1));
    currentSlide = currentSlide == n ? 1 : ++currentSlide;
    showSlide(currentSlide);
}

function showSlide(index){
    // alert(index);
    let slides = document.body.getElementsByClassName('slides')[0];
    let currentOffset = calcOffset(index)
    slides.style.left = -currentOffset + 'px';
}