//   Collapsible start
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.collapsible').collapsible();
});
// collapsible


// back to top
const htmlElement = document.querySelector("html");
const scrollToTop = document.querySelector("#scrollToTop");

scrollToTop.addEventListener("click", () => {
  $(htmlElement).animate({ scrollTop: $(htmlElement).offset().top }, 400);
});

document.addEventListener("scroll", () => {
  if (htmlElement.scrollTop > 0) {
    scrollToTop.style.opacity = 1;
  } else {
    scrollToTop.style.opacity = 0;
  }
});



// const htmlElement = document.querySelector("html");
// const toTopBtn = document.querySelector("#scrollToTop");

// toTopBtn.addEventListener("click", () => {
//     htmlElement.scrollTop = 0;
// });