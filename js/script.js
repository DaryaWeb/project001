$(".menu").click(function () {
  $(this).toggleClass("icon-menu");
  $(this).toggleClass("icon-cross");
  $("nav").toggleClass("down");
  $("nav li a").removeClass("down");
  $(".search").removeClass("down");
  $(".icon-search").removeClass("icon-cross");
});


$("nav li a").click(function () {
  $(".menu").addClass("icon-menu");
  $(".menu").removeClass("icon-cross");
  $("nav").toggleClass("down");
});


$(".icon-search").click(function () {
  $(this).toggleClass("icon-cross");
  $(".menu").addClass("icon-menu");
  $(".menu").removeClass("icon-cross");
  $(".search").toggleClass("down");
  $("nav").removeClass("down");
});
$(".menu").click(function () {
  if ($(".menu").hasClass("icon-cross")) {
    $(".menu-search-area").addClass("hide-area");
  } else {
    $(".menu-search-area").removeClass("hide-area");
  }
});

$("nav>ul>li").on({
  mouseenter: function () {
    $(this).parent().addClass("hover-class");
  },
  mouseleave: function () {
     $(this).parent().removeClass("hover-class");
  },
});

$(document).ready(function () {
  var $slider = $(".slider");
  var $progressBar = $(".progress");
  var $progressBarLabel = $(".slider__label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    dots: true,
  });
});
var $slider = $(".slider");
if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
     $(".progress-bar .last-number").text('0' + slidesCount);
  };

  $slider.on("init", function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(".progress-bar .first-number").text('0' + currentSlide);
    $(".progress-bar .last-number").text( slidesCount);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
    slidesCount = slick.slideCount;
    currentSlide = slick.slickCurrentSlide() + 1;
    $(".progress-bar .first-number").text('0' + currentSlide);
    $(".progress-bar .last-number").text('0' + slidesCount);
  });

  $slider.slick();
}