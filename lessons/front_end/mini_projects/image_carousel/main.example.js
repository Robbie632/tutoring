// html element for the div that contains the carousel buttons
const carouselControls = document.getElementById('carousel-controls');
// html element for container that holds the images
const imagesContainer = document.getElementById('images-container');
// Index used to control which image is shown
let carouselIndex = 0;

let imageWidth=700;
let numImages =imagesContainer.children.length;

/**
 * increments carouselIndex
 */
function increment() {
    carouselIndex = Math.min(carouselIndex += 1, numImages-1);
}
/**
 * decrements carouselIndex
 */
function decrement() {
    carouselIndex = Math.max(carouselIndex -= 1, 0);
}

/**
 * 
 * @param direction 'previous' | 'next'
 * shifts to an adjacent image
 */
function shift(direction) {
    if (direction=='previous') {
        decrement();
        let translationPixels = carouselIndex*imageWidth; 
        imagesContainer.style.transform = `translateX(-${translationPixels}px)`
    } else if (direction=='next') {
        increment();
        let translationPixels = carouselIndex*imageWidth; 
        imagesContainer.style.transform = `translateX(-${translationPixels}px)`
    }
}

/**
 * Add event listener for previous and next carousel buttons
 */
carouselControls.addEventListener('click', (e) => {
    if (e.target.id == 'carousel-prev'){
        shift('previous');
    } else if (e.target.id == 'carousel-next') {
        shift('next');
    }
})

/**
 * makes carousel move onto next image automatically
 */
setInterval(() => {
    shift('next')

}, 4000)