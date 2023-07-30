let sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);

let countIamge = sliderImage.length;

let currentSlide = 1;

let slideNumberElement = document.querySelector("#slide-number");
let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElmenet = document.createElement("ul");
paginationElmenet.id = "pagination-ul";

for (let i = 1; i <= countIamge; i++) {
  let li = document.createElement("li");

  li.dataset.index = i;
  li.appendChild(document.createTextNode(i));

  paginationElmenet.appendChild(li);
}
let indicators = document.querySelector("#indicators");

indicators.appendChild(paginationElmenet);

let createdUl = document.getElementById("pagination-ul");

let paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theCheaker();
  };
}

theCheaker();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;

    theCheaker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;

    theCheaker();
  }
}

function theCheaker() {
  slideNumberElement.textContent = `Slide ${currentSlide} Of ${countIamge}`;

  removeAllActive();

  sliderImage[currentSlide - 1].classList.add("active");

  createdUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == countIamge) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImage.forEach((img) => {
    img.classList.remove("active");
  });

  paginationsBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
