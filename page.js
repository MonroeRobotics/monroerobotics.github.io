let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  checkForNav();
});

window.onscroll = function() {checkForNav()};

function checkForNav() {
  let width = window.innerWidth
  console.log(width)
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } 
  else if (mousePos.y <= 100){
    document.getElementById("nav").style.top = "0";
  }
  else if(width <= 1100 && mousePos.y <= 200) {
    document.getElementById("nav").style.top = "0";
  }
  else {
    document.getElementById("nav").style.top = "var(--navHeightUp)";
  }
} 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      }
  });
});

const hiddentElements = document.querySelectorAll('.hidden');
hiddentElements.forEach((el) => observer.observe(el));

const observerBlur = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('showBlur')
      }
  });
});

const hiddenBlurElements = document.querySelectorAll('.hiddenBlur');
hiddenBlurElements.forEach((el) => observerBlur.observe(el));

const observerBlurRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('showBlurRight')
      }
  });
});

const hiddenBlurRightElements = document.querySelectorAll('.hiddenBlurRight');
hiddenBlurRightElements.forEach((el) => observerBlurRight.observe(el));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('showRight')
      }
  });
});

const hiddenRightElements = document.querySelectorAll('.hiddenRight');
hiddenRightElements.forEach((el) => observerRight.observe(el));