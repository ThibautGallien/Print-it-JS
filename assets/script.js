const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Bullet points pour changer de slide
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected");
  dot.addEventListener("click", () => goToSlide(index));
  if (dotsContainer != null) dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[currentIndex].classList.add("dot_selected");
  bannerImg.src = slides[currentIndex].image;
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Flèches pour changer de slide
const arrowLeft = document.createElement("img");
arrowLeft.classList.add("arrow", "arrow_left");
arrowLeft.src = "./assets/images/arrow_left.png";
arrowLeft.alt = "Flèche gauche";
arrowLeft.addEventListener("click", prevSlide);

document.querySelector("#banner").appendChild(arrowLeft);

const arrowRight = document.createElement("img");
arrowRight.classList.add("arrow", "arrow_right");
arrowRight.src = "./assets/images/arrow_right.png";
arrowRight.alt = "Flèche droite";
arrowRight.addEventListener("click", nextSlide);

document.querySelector("#banner").appendChild(arrowRight);

// Timer pour changer de slide automatiquement
setInterval(nextSlide, 5000);
