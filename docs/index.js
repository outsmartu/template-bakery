let currentSlide = 1,
    n = 3,
    offset = 100

showSlide(currentSlide)

function calcOffset(slideToShow) {
    return (slideToShow - 1) * offset
}

function prev() {
    prevSlide = currentSlide == 1 ? n : currentSlide - 1
    goToSlide(prevSlide)
}

function next() {
    nextSlide = currentSlide == n ? 1 : currentSlide + 1
    goToSlide(nextSlide)
}

function showSlide(index) {
    let slides = document.body.getElementsByClassName('slides')[0],
        currentOffset = calcOffset(index)
    slides.style.left = -currentOffset + '%'
    currentSlide = index
}

function goToSlide(index) {
    dashes = document.getElementsByClassName('slider__link')

    dashes[currentSlide - 1].classList.toggle('slider__link_active')
    dashes[index - 1].classList.toggle('slider__link_active')

    showSlide(index)
}

let collapsed = true
function toggleHamburger() {
    let links = document.getElementsByClassName('navbar__links')[0]
    if (collapsed) {
        function expandMenu() {
            function makeCross() {
                svg = document.getElementsByClassName('hamburger')[0]
                svg.childNodes[1].setAttribute('transform', 'rotate(45)')
                svg.childNodes[5].setAttribute('transform', 'rotate(-45)')
                svg.childNodes[3].style.display = 'none'
            }

            makeCross()
            links.style.display = "flex"
            // links.style.height = 0
        }

        expandMenu()
    } else {
        function collapseMenu() {
            function makeBurger() {
                svg = document.getElementsByClassName('hamburger')[0]

                svg.childNodes[1].setAttribute('transform', 'rotate(0)')
                svg.childNodes[5].setAttribute('transform', 'rotate(0)')
                svg.childNodes[3].style.display = ''
            }

            makeBurger()
            links.style.display = "none"
            // links.style.height = "auto"
        }

        collapseMenu()
    }
    collapsed = !collapsed
}

window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop,
        nabvar = document.getElementsByTagName('nav')[0],
        scrollOffset = 300

    scrolled >= scrollOffset ? nabvar.style.top = 0 : nabvar.style.top = `-${1.5 * nabvar.offsetHeight}px`
}
