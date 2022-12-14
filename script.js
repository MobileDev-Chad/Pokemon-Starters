// Sound effect & music
let mySound = new Audio("./sounds/Pokemon (A Button) - Sound Effect (HD).mp3");
let myShake = new Audio("./sounds/pokeball_sound_effects.mp3");
let myCongrats = new Audio(
  "./sounds/Congratulations!  - Pokémon X & Y [OST].mp3"
);

let pokeSounds = {
  red: new Audio("./sounds/Charmander Red.mp3"),
  blue: new Audio("./sounds/Squirtle Blue.mp3"),
  green: new Audio("./sounds/Bulbasaur Green.mp3"),
};

// Get individual images of opened pokeball
const openBall = {
  red: document.querySelector(".pokeball:nth-of-type(2)"),
  blue: document.querySelector(".pokeball:nth-of-type(3)"),
  green: document.querySelector(".pokeball:nth-of-type(1)"),
};

// Get individual images of pokemon
const monsters = {
  charmander: document.querySelector(".charmander"),
  squirtle: document.querySelector(".squirtle"),
  bulbasaur: document.querySelector(".bulbasaur"),
};

//Get the menu
const menuSelect = {
  menu: document.querySelector(".menu"),
  yes: document.querySelector(".yes"),
  no: document.querySelector(".no"),
};

// Get the arrows
const arrow_one = document.querySelector(".arrow:nth-of-type(1)");
const arrow_two = document.querySelector(".arrow:nth-of-type(2)");
const arrow_three = document.querySelector(".arrow:nth-of-type(3)");
// Get the modal
const modal = document.querySelector("#myModal");
// Get paragraph in modal
const paragraph = document.querySelector("p");
// Get all pokemon
const starters = document.querySelector(".monsters");

let i = null;
let m = null;
let pokeVoice = null;
let pokeName = null;
let pokeStart = false;

const release=()=> {
  if (!pokeStart) {
    i.classList.add("pokeballShake");
    myShake.play();
    myShake.volume = 0.3;
    setTimeout(() => {
      myShake.pause();
      pokeVoice.play();
      pokeVoice.volume = 0.3;
      i.style.backgroundImage = "url('./images/openBall.png')";
      i.classList.remove("pokeballShake");
      i.style.zIndex = "3";
      i.style.cursor = "default";
      m.style.visibility = "visible";
      m.style.cursor = "pointer";
      starters.style.zIndex = "3";
      // arrows.style.visibility = "hidden";
      modal.style.display = "block";
      menuSelect.menu.style.display = "block";
      paragraph.textContent += pokeName;
    }, 3000);
    pokeStart = true;
  }
}

openBall.red.addEventListener("click", () => {
  if (!i) {
    pokeVoice = pokeSounds.red;
    i = openBall.red;
    m = monsters.charmander;
    pokeName = " Charmander?";
    release();
  }
});

openBall.blue.addEventListener("click", () => {
  if (!i) {
    pokeVoice = pokeSounds.blue;
    i = openBall.blue;
    m = monsters.squirtle;
    pokeName = " Squirtle?";
    release();
  }
});

openBall.green.addEventListener("click", () => {
  if (!i) {
    pokeVoice = pokeSounds.green;
    i = openBall.green;
    m = monsters.bulbasaur;
    pokeName = " Bulbasaur?";
    release();
  }
});

openBall.red.addEventListener("mouseover", () => {
  if (!i) {
    arrow_two.style.visibility = "visible";
  }
});
openBall.red.addEventListener("mouseout", () => {
  arrow_two.style.visibility = "hidden";
});

openBall.blue.addEventListener("mouseover", () => {
  if (!i) {
    arrow_three.style.visibility = "visible";
  }
});

openBall.blue.addEventListener("mouseout", () => {
  arrow_three.style.visibility = "hidden";
});

openBall.green.addEventListener("mouseover", () => {
  if (!i) {
    arrow_one.style.visibility = "visible";
  }
});
openBall.green.addEventListener("mouseout", () => {
  arrow_one.style.visibility = "hidden";
});

// Pokemon voice sounds on click events
monsters.charmander.addEventListener("click", () => {
  pokeVoice.play();
  pokeVoice.volume = 0.3;
});
monsters.squirtle.addEventListener("click", () => {
  pokeVoice.play();
  pokeVoice.volume = 0.3;
});
monsters.bulbasaur.addEventListener("click", () => {
  pokeVoice.play();
  pokeVoice.volume = 0.3;
});

// When the user clicks no, reload the game
menuSelect.no.addEventListener("click", () => {
  if (i) {
    location.reload();
  }
});

// When the user clicks yes, display congratulations screen
menuSelect.yes.addEventListener("click", () => {
  if (i) {
    myCongrats.play();
    myCongrats.volume = 0.3;
    paragraph.innerHTML = "Congratulations you have selected";
    pokeName = pokeName.slice(0, -1);
    paragraph.textContent += pokeName += "!";
  }
});
