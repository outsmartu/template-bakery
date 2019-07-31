let currentSlide = 1;
let n = 3;
let offset = 100;

showSlide(currentSlide);

// var all_slides = document.body.getElementsByClassName('slides')[0];
// const slides-collection = document.body.getElementsByClassName('slide');

function calcOffset(slideToShow) {
    return (slideToShow - 1) * offset;
}

function prev() {
    // alert('show ' + (currentSlide - 1));
    currentSlide = currentSlide == 1 ? n : --currentSlide;
    showSlide(currentSlide);

}

function next() {
    // alert('show ' + (currentSlide + 1));
    currentSlide = currentSlide == n ? 1 : ++currentSlide;
    showSlide(currentSlide);
}

function showSlide(index) {
    // alert(index);
    let slides = document.body.getElementsByClassName('slides')[0];
    let currentOffset = calcOffset(index)
    slides.style.left = -currentOffset + '%';
}

let collapsed = true
function toggleHamburger() {

    let nav = document.getElementsByClassName('nav')[0]
    let navSocials = nav.getElementsByClassName('nav__socials')[0]

    let links = document.getElementsByClassName('links')[0]
    if (collapsed) {

        function makeCross() {
            svg = document.getElementsByClassName('hamburger')[0]
            svg.childNodes[1].setAttribute('transform', 'rotate(45)')
            svg.childNodes[5].setAttribute('transform', 'rotate(-45)')
            svg.childNodes[3].style.display = 'none'
        }

        makeCross()


        // nav.classList.remove('navbar-view_expanded')
        // nav.classList.add('navbar-view_collapsed')

        links.style.display = "flex"
        // links.style.height = 'auto'


    } else {
        function makeBurger() {
            svg = document.getElementsByClassName('hamburger')[0]
            
            svg.childNodes[1].setAttribute('transform', 'rotate(0)')
            svg.childNodes[5].setAttribute('transform', 'rotate(0)')
            svg.childNodes[3].style.display = ''
        }
        makeBurger()


        // nav.classList.remove('navbar-view_collapsed')
        // nav.classList.add('navbar-view_expanded')

        links.style.display = "none"
        // links.style.height = 0
    }
    collapsed = !collapsed
}

// window.onscroll = function () {
//     let scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     let nabvar = document.getElementsByTagName('nav')[0]
//     if (scrolled >= 200){
//         nabvar.style.top = 0
//     }else{
//         nabvar.style.top = `-${1.5 * nabvar.offsetHeight}px`
//     }
// }