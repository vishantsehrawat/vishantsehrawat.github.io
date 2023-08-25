// script.js
const image = document.querySelector(".home-img");
let scaleValue = 1;
let opacityValue = 1;
let mouseStoppedTimer;
let restoreTimer;

document.addEventListener("mousemove", () => {
  clearTimeout(mouseStoppedTimer);
  clearTimeout(restoreTimer);

  // Set the initial opacity and scale values
  image.style.opacity = 1;
  image.style.transform = "translate(-50%, 0%) scale(1)";

  // Decrease opacity and scale on mouse move
  opacityValue = 1;
  scaleValue = 1;

  const decreaseOpacityAndScale = () => {
    opacityValue -= 0.02; // Adjust the decrement value for desired speed
    scaleValue -= 0.01; // Adjust the decrement value for desired speed

    if (opacityValue > 0.5 && scaleValue > 0.9) {
      image.style.opacity = opacityValue.toFixed(2);
      image.style.transform = `translate(-50%, 0%) scale(${scaleValue.toFixed(
        2
      )})`;
      requestAnimationFrame(decreaseOpacityAndScale);
    } else {
      opacityValue = 0.5;
      scaleValue = 0.9;
      image.style.opacity = opacityValue;
      image.style.transform = `translate(-50%, 0%) scale(${scaleValue})`;
    }
  };
  requestAnimationFrame(decreaseOpacityAndScale);

  // Set the timer to restore opacity and scale when the mouse stops moving
  mouseStoppedTimer = setTimeout(() => {
    restoreTimer = setTimeout(() => {
      const restoreOpacityAndScale = () => {
        opacityValue += 0.02; // Adjust the increment value for desired speed
        scaleValue += 0.01; // Adjust the increment value for desired speed

        if (opacityValue < 1 && scaleValue < 1) {
          image.style.opacity = opacityValue.toFixed(2);
          image.style.transform = `translate(-50%, 0%) scale(${scaleValue.toFixed(
            2
          )})`;
          requestAnimationFrame(restoreOpacityAndScale);
        } else {
          opacityValue = 1;
          scaleValue = 1;
          image.style.opacity = opacityValue;
          image.style.transform = `translate(-50%, 0%) scale(${scaleValue})`;
        }
      };
      requestAnimationFrame(restoreOpacityAndScale);
    }, 500); // Set the delay for restoration in milliseconds (1000ms = 1 second)
  }, 500); // Set the delay for detecting mouse stop in milliseconds (1000ms = 1 second)
});

// navbar hamburger toggle ++++++++++++++++++++++++++++
// ... Your existing script ...

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navElements = document.querySelectorAll(".nav__item");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
navElements.forEach((navElement) => {
  navElement.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// navbar hamburger toggle ----------------------
