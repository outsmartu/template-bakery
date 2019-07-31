let currentSlide = 1,
    n = 3,
    offset = 100

showSlide(currentSlide)

function calcOffset(slideToShow) {
    return (slideToShow - 1) * offset
}

function prev() {
    currentSlide = currentSlide == 1 ? n : --currentSlide
    showSlide(currentSlide)
}

function next() {
    currentSlide = currentSlide == n ? 1 : ++currentSlide
    showSlide(currentSlide)
}

function showSlide(index) {
    let slides = document.body.getElementsByClassName('slides')[0],
        currentOffset = calcOffset(index)
    slides.style.left = -currentOffset + '%'
}

let collapsed = true
function toggleHamburger() {
    let links = document.getElementsByClassName('links')[0]
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
