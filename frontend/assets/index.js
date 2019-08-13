// SLIDER

let currentSlide = 1
const n = 3,
    offset = 100

const calcOffset = (slideToShow) => {
    return (slideToShow - 1) * offset
},
    showSlide = (index) => {
        let slides = document.body.getElementsByClassName('slides')[0],
            currentOffset = calcOffset(index)
        slides.style.left = -currentOffset + '%'
        currentSlide = index
    },

    goToSlide = (index) => {
        let dashes = document.getElementsByClassName('slider__link')

        dashes[currentSlide - 1].classList.toggle('slider__link_active')
        dashes[index - 1].classList.toggle('slider__link_active')

        showSlide(index)
    },

    prev = () => {
        let prevSlide = currentSlide == 1 ? n : currentSlide - 1
        goToSlide(prevSlide)
    },

    next = () => {
        let nextSlide = currentSlide == n ? 1 : currentSlide + 1
        goToSlide(nextSlide)
    }

(() => { setInterval(() => { next() }, 10 * 1000) })()
showSlide(currentSlide)




// HAMBURGER
let collapsed = true
toggleHamburger = () => {
    var links = document.getElementsByClassName('navbar__links')[0]
    if (collapsed) {
        const expandMenu = () => {
            const makeCross = () => {
                let svg = document.getElementsByClassName('hamburger')[0]
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
        const collapseMenu = () => {
            const makeBurger = () => {
                let svg = document.getElementsByClassName('hamburger')[0]

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

// NAVBAR

window.onscroll = () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop,
        nabvar = document.getElementsByTagName('nav')[0],
        scrollOffset = 300

    scrolled >= scrollOffset ? nabvar.style.top = 0 : nabvar.style.top = `-${1.5 * nabvar.offsetHeight}px`
}
