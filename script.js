const hamburger = document.querySelector(".hamburger")
const topNav = document.querySelector(".topNav")
const blocker = document.querySelector(".blocker")
const topMenuBtn = document.querySelector(".top-menu-btn")
const topAboutBtn = document.querySelector(".top-about-btn")
const topLocationBtn = document.querySelector(".top-location-btn")

function toggleClasses() {
  hamburger.classList.toggle("open")
  topNav.classList.toggle("open")
  blocker.classList.toggle("open")
}

hamburger.addEventListener("click", toggleClasses)

blocker.addEventListener("click", toggleClasses)

topMenuBtn.addEventListener("click", toggleClasses)

topAboutBtn.addEventListener("click", toggleClasses)

topLocationBtn.addEventListener("click", toggleClasses)

const upBtn = document.querySelector(".upBtn")

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    upBtn.style.display = "block"
  } else {
    upBtn.style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

// for google map
function initMap() {
  // The location of S
  const uji = { lat: 35.664054, lng: 139.698546 }
  // The map, centered at uji
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uji,
  })
  // The marker, positioned at uji
  const marker = new google.maps.Marker({
    position: uji,
    map: map,
  })
}

window.initMap = initMap
