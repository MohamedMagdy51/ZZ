// Start splash screen
let splash = document.querySelector(".splash");

// gallery

let gallery = document.querySelector(".gallery img");
let counter = 1;

setInterval(function () {
  if (counter === 6) {
    gallery.src = `../imgs/gallery-${counter}.jpg`;
    counter = 1 ;
  }
  gallery.src = `../imgs/gallery-${counter}.jpg`;
  counter++;
}, 3000);

window.onload = (_) => {
  splash.style.cssText = "opacity: 0 ;visibility: hidden;";
};
