let hihatSound = new Audio("./sounds/hihat.wav");
let boomSound = new Audio("./sounds/boom.wav");
let clapSound = new Audio("./sounds/clap.wav");
let kickSound = new Audio("./sounds/kick.wav");
let openhatSound = new Audio("./sounds/openhat.wav");
let rideSound = new Audio("./sounds/ride.wav");
let snareSound = new Audio("./sounds/snare.wav");
let tinkSound = new Audio("./sounds/tink.wav");
let tomSound = new Audio("./sounds/tom.wav");

const hihat = document.getElementById("hihat");
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "h":
      hihatSound.play();
      break;
    case "b":
      boomSound.play();
      break;
    case "c":
      clapSound.play();
      break;
    case "k":
      kickSound.play();
      break;
    case "o":
      openhatSound.play();
      break;
    case "r":
      rideSound.play();
      break;
    case "s":
      snareSound.play();
      break;
    case "t":
      tinkSound.play();
      break;
    case "m":
      tomSound.play();
      break;
    default:
      break;
  }
});

function playDrumSound(event) {
  const id = event.target.id;

  switch (id) {
    case "hihat":
      hihatSound.play();
      break;
    case "boom":
      boomSound.play();
      break;
    case "clap":
      clapSound.play();
      break;
    case "kick":
      kickSound.play();
      break;
    case "openhat":
      openhatSound.play();
      break;
    case "ride":
      rideSound.play();
      break;
    case "snare":
      snareSound.play();
      break;
    case "tink":
      tinkSound.play();
      break;
    case "tom":
      tomSound.play();
      break;
    default:
      break;
  }
}

hihat.addEventListener("click", playDrumSound);
boom.addEventListener("click", playDrumSound);
clap.addEventListener("click", playDrumSound);
kick.addEventListener("click", playDrumSound);
openhat.addEventListener("click", playDrumSound);
ride.addEventListener("click", playDrumSound);
snare.addEventListener("click", playDrumSound);
tink.addEventListener("click", playDrumSound);
tom.addEventListener("click", playDrumSound);

function hideWelcomeMes() {
  const welcomeMes = document.getElementById("welcomeMes");
  const drumContainer = document.getElementById("drumContainer");

  welcomeMes.classList.add("hidden");
  drumContainer.classList.remove("hidden");
  drumContainer.style.opacity = 1;
}

document.addEventListener("mousemove", () => {
  setTimeout(() => {
    hideWelcomeMes();
  }, 1000);
});
