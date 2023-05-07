document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".port-text",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
  });

  anime({
    targets: ".navbar",
    translateY: [-50, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 1000,
    opacity: [0, 1],
  });

  anime({
    targets: ".hey-name",
    translateX: 0,
    scale: 1,
    rotate: "1turn",
  });

  // anime({
  //     targets: '.card',
  //     scale: [
  //         { value: .1, easing: 'easeOutSine', duration: 500 },
  //         { value: 1, easing: 'easeInOutQuad', duration: 1200 }
  //     ],
  //     delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
  // });

  anime({
    targets: ".card",
    translateX: [-50, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 1000,
    opacity: [0, 1],
  });

  // anime({
  //     targets: '.contact-sec',
  //     scale: [
  //         { value: .1, easing: 'easeOutSine', duration: 500 },
  //         { value: 1, easing: 'easeInOutQuad', duration: 1200 }
  //     ],
  //     delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
  // });
});

$(".menu").click(function () {
  $(this).toggleClass("open");
});

function navbar() {
  document.getElementById("nav").style.backgroundColor = "black";
}


