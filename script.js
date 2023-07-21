$("#images-slider-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    993: {
      items: 5,
    },
  },
});
$("#cards-slider-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false,
    },
    768: {
      items: 2,
      dots: true,
      nav: false,
    },
    993: {
      items: 3,
      dots: true,
    },
  },
});
