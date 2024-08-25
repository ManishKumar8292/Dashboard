$(document).ready(function () {
  var multiCarousel = document.querySelector("#carouselControls");
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multiCarousel, {
      interval: false,
      wrap: false,
    });
    var carsulWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carsulWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        $("#carouselControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        $("#carouselControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});
