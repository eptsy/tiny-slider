var tiny = tns({
  container: ".tiny__slider",
  nav: false,
  controls: false,
  items: 1,
  mouseDrag: true,
  touch: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
});
var card = tns({
  container: ".tiny__card",
  items: 3,
  nav: false,
  controls: true,
  loop: true,
  gutter: 10,
  controlsText: [
    '<i class="fa-solid fa-circle-chevron-left"></i>',
    '<i class="fa-solid fa-circle-chevron-right"></i>',
  ],
});
