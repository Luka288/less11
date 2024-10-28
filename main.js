var splide = new Splide(".splide", {
  perPage: 2,
  focus: "center",
  type: "loop",
  padding: "5rem",
});

splide.mount();

var secondSplide = new Splide(".secondSplide", {
  focus: "center",
  direction: "ttb",
  height: "15rem",
});

secondSplide.mount();
