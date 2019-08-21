document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, { indicators: true });
});

let el = document.getElementsByClassName("menu");
el.className = "active-menu";
