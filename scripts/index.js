// script.js
const image = document.querySelector('.home-img');
let opacityValue = 1;
let mouseStoppedTimer;

document.addEventListener('mousemove', (e) => {
    clearTimeout(mouseStoppedTimer);

    // Set the initial opacity to 1
    image.style.opacity = 1;

    // Decrease opacity to 0.5 on mouse move
    opacityValue = 1;
    const decreaseOpacity = () => {
        opacityValue -= 0.02; // Adjust the decrement value for desired speed
        if (opacityValue > 0.5) {
            image.style.opacity = opacityValue.toFixed(2);
            requestAnimationFrame(decreaseOpacity);
        } else {
            opacityValue = 0.5;
            image.style.opacity = opacityValue;
        }
    };
    requestAnimationFrame(decreaseOpacity);

    // Set the timer to restore opacity when the mouse stops moving
    mouseStoppedTimer = setTimeout(() => {
        const restoreOpacity = () => {
            opacityValue += 0.02; // Adjust the increment value for desired speed
            if (opacityValue < 1) {
                image.style.opacity = opacityValue.toFixed(2);
                requestAnimationFrame(restoreOpacity);
            } else {
                opacityValue = 1;
                image.style.opacity = opacityValue;
            }
        };
        requestAnimationFrame(restoreOpacity);
    }, 500); // Set the delay in milliseconds (1000ms = 1 second)

});
