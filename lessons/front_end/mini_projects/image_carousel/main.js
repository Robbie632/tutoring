const carouselControls = document.getElementById('carousel-controls');
const imagesContainer = document.getElementById('images-container');
let carouselIndex = 0;
let imageWidth=700;
let numImages =imagesContainer.children.length;

function increment() {
    carouselIndex = Math.min(carouselIndex += 1, numImages-1);
}
function decrement() {
    carouselIndex = Math.max(carouselIndex -= 1, 0);
}

carouselControls.addEventListener('click', (e) => {
    
    if (e.target.id == 'carousel-prev'){
        decrement();
        let translationPixels = carouselIndex*imageWidth; 
        imagesContainer.style.transform = `translateX(-${translationPixels}px)`

    } else if (e.target.id == 'carousel-next') {
        increment();
        let translationPixels = carouselIndex*imageWidth; 
        imagesContainer.style.transform = `translateX(-${translationPixels}px)`
    }
})