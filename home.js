window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "var(--navHeightUp)";
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