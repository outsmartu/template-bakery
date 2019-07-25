let currentSlide = 1;
let n = 3;
let offset = 100;

showSlide(currentSlide);

// var all_slides = document.body.getElementsByClassName('slides')[0];
// const slides-collection = document.body.getElementsByClassName('slide');

function calcOffset(slideToShow){
    return (slideToShow - 1) * offset;
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
    slides.style.left = -currentOffset + '%';
}

let cross = false
function toggleHamburger(){
    
    if (cross){
        svg = document.getElementsByClassName('hamburger')[0]
        svg.childNodes[1].setAttribute('transform', 'rotate(0)')
        svg.childNodes[5].setAttribute('transform', 'rotate(0)')
        svg.childNodes[3].style.display = ''
    }else{
        svg = document.getElementsByClassName('hamburger')[0]
        svg.childNodes[1].setAttribute('transform', 'rotate(45)')
        svg.childNodes[5].setAttribute('transform', 'rotate(-45)')
        svg.childNodes[3].style.display = 'none'

    }
    cross = !cross
}