window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
} 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      }
      else {
        entry.target.classList.remove('show')
      }
  });
});

const hiddentElements = document.querySelectorAll('.hidden');
hiddentElements.forEach((el) => observer.observe(el));