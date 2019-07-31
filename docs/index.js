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

let collapsed = true
function toggleHamburger(){
    
    let nav = document.getElementsByClassName('nav')[0]
    let navSocials = nav.getElementsByClassName('nav__socials')[0]
    if (!collapsed){

        function makeCross(){
            svg = document.getElementsByClassName('hamburger')[0]
            svg.childNodes[1].setAttribute('transform', 'rotate(0)')
            svg.childNodes[5].setAttribute('transform', 'rotate(0)')
            svg.childNodes[3].style.display = ''
        }

        makeCross()

        
        nav.classList.remove('navbar-view_expanded')
        nav.classList.add('navbar-view_collapsed')

        // navSocials.classList.remove('nav__socials_expanded')
        // navSocials.classList.add('nav__socials_collapsed')
        // navSocials.style.display = 'flex'

        
    }else{
        function makeBurger(){
            svg = document.getElementsByClassName('hamburger')[0]
            svg.childNodes[1].setAttribute('transform', 'rotate(45)')
            svg.childNodes[5].setAttribute('transform', 'rotate(-45)')
            svg.childNodes[3].style.display = 'none'
        }
        makeBurger()
        
        
        nav.classList.remove('navbar-view_collapsed')
        nav.classList.add('navbar-view_expanded')

        // navSocials.classList.remove('nav__socials_collapsed')
        // navSocials.classList.add('nav__socials_expanded')
    }
    collapsed = !collapsed
}