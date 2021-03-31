const images = document.querySelectorAll('.image')
const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')

let activeImage = 0

btnRight.addEventListener('click', () => {
    activeImage++

    if (activeImage > 4) {
        activeImage = 0
    }

    activeOnlyOneImage()
})

btnLeft.addEventListener('click', () => {
    activeImage--

    if (activeImage < 0) {
        activeImage = 4
    }

    activeOnlyOneImage()
})

let imageChangeAuto = setInterval(() => {
    activeImage++

    if (activeImage > 4) {
        activeImage = 0
    }

    activeOnlyOneImage()
}, 5000);

function activeOnlyOneImage() {
    images.forEach( image => image.classList.remove('active') )
    images[activeImage].classList.add('active')
}