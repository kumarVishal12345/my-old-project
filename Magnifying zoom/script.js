const container = document.querySelector('.image-container');
const magnifier = document.querySelector('.magnifier');
const zoomedImage = document.querySelector('.zoomed-image');

container.addEventListener('mousemove', function(event) {
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = container;
    const magnifierSize = 150;
    const zoomLevel = 2;

    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    magnifier.style.display = 'block';
    magnifier.style.left = `${x - magnifierSize / 2}%`;
    magnifier.style.top = `${y - magnifierSize / 2}%`;

    const zoomX = (x / 100) * (zoomLevel * 100);
    const zoomY = (y / 100) * (zoomLevel * 100);

    zoomedImage.style.backgroundImage = `url('image.jpg')`;
    zoomedImage.style.backgroundSize = `${zoomLevel * 100}% ${zoomLevel * 100}%`;
    zoomedImage.style.backgroundPosition = `-${zoomX}px -${zoomY}px`;
});

container.addEventListener('mouseleave', function() {
    magnifier.style.display = 'none';
    zoomedImage.style.backgroundImage = 'none';
});
