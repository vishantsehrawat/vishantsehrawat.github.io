const image = document.querySelector(".home-img");
let scaleValue = 1;
let opacityValue = 1;
let touchStoppedTimer;
let restoreTimer;

const handleTouch = () => {
  clearTimeout(touchStoppedTimer);
  clearTimeout(restoreTimer);

  image.style.opacity = 1;
  image.style.transform = "translate(-50%, 0%) scale(1)";

  opacityValue = 1;
  scaleValue = 1;

  const decreaseOpacityAndScale = () => {
    opacityValue -= 0.02;
    scaleValue -= 0.01;

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

  touchStoppedTimer = setTimeout(() => {
    restoreTimer = setTimeout(() => {
      const restoreOpacityAndScale = () => {
        opacityValue += 0.02;
        scaleValue += 0.01;

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
    }, 500);
  }, 500);
};

document.addEventListener("touchstart", handleTouch);

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
