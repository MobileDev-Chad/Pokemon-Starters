// Sound effect & music
var mySound = new Audio("./sounds/Pokemon (A Button) - Sound Effect (HD).mp3");
var myMusic = new Audio("./sounds/Santalune Forest - Pokémon X & Y [OST].mp3");
var myShake = new Audio("./sounds/pokeball_sound_effects.mp3");
var myCongrats = new Audio("./sounds/Congratulations!  - Pokémon X & Y [OST].mp3");


var pokeSounds = {
   red: new Audio("./sounds/Charmander Red.mp3"),
   blue: new Audio("./sounds/Squirtle Blue.mp3"),
   green: new Audio("./sounds/Bulbasaur Green.mp3")
};

// Get individual images of opened pokeball
const openBall = {
   red: document.querySelector(".pokeball:nth-of-type(1)"),
   blue: document.querySelector(".pokeball:nth-of-type(2)"),
   green: document.querySelector(".pokeball:nth-of-type(3)")}
;
// Get individual images of pokemon
const monsters = {
   charmander: document.querySelector(".charmander"),
   squirtle: document.querySelector(".squirtle"),
   bulbasaur: document.querySelector(".bulbasaur")
};

//Get the menu
const menuSelect = {
   menu:document.querySelector(".menu"),
   yes:document.querySelector(".yes"),
   no:document.querySelector(".no"),
};

// Get the arrow 
const arrow = document.querySelector(".arrow");
// Get the modal
const modal = document.querySelector("#myModal");
// Get paragraph in modal
const paragraph = document.querySelector("p");
// Get all pokemon
const starters = document.querySelector(".monsters");

let i;
let m;
let pokeVoice;
let pokeName;
let pokeStart = false;

// Play music on mouse  movement
window.onmousemove = function() {
   if (typeof myMusic.loop == 'boolean')
{
    myMusic.loop = true;
}
else
{
    myMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myMusic.play();
 }

function release () {
   if (!pokeStart) {
      i.classList.add("pokeballShake");
      myShake.play();
      setTimeout(() => {
      myShake.pause();
      pokeVoice.play();   
      i.src = "./images/openBall.png";
      i.classList.remove("pokeballShake");
      i.style.top = "280px";
      i.style.zIndex = "3";
      i.style.cursor = "default";
      m.style.visibility = "visible";
      m.style.cursor = "pointer"; 
      starters.style.zIndex = "3";
      arrow.style.display = "none";
      modal.style.display = "block";
      menuSelect.menu.style.display = "block";
      paragraph.textContent += pokeName;
      }, 3000);
      pokeStart = true;
   };
}

openBall.red.addEventListener("click", () => {
   if(!i){
      pokeVoice = pokeSounds.red;
      i = openBall.red;
      m = monsters.charmander;
      pokeName = " Charmander?";
      release();
   }
  });

openBall.blue.addEventListener("click", () => {
   if(!i){
      pokeVoice = pokeSounds.blue;
      i = openBall.blue;
      m = monsters.squirtle;
      pokeName = " Squirtle?";
      release();
   }
  });

openBall.green.addEventListener("click", () => {
   if(!i){
                      pokeVoice = pokeSounds.green;
      i = openBall.green;
      m = monsters.bulbasaur;
      pokeName = " Bulbasaur?";
      release();
   }
  });

  openBall.red.addEventListener("mouseover", () => {
   if(!i){
      mySound.play();
      arrow.style.display = "block";
      arrow.style.left = "-35px"
   }
  });
  openBall.red.addEventListener("mouseout", () => {
      arrow.style.display = "none";
      mySound.pause();
      mySound.currentTime = 0;
  });

  openBall.blue.addEventListener("mouseover", () => {
   if(!i){
      mySound.play();
      arrow.style.display = "block";
      arrow.style.left = "225px"
   }
  });
  
  openBall.blue.addEventListener("mouseout", () => {
      mySound.pause();
      mySound.currentTime = 0;
      arrow.style.display = "none";
  });

  openBall.green.addEventListener("mouseover", () => {
   if(!i){
      mySound.play();
      arrow.style.display = "block";
      arrow.style.left = "-300px"
   }
  });
  openBall.green.addEventListener("mouseout", () => {
      mySound.pause();
      mySound.currentTime = 0;
      arrow.style.display = "none";
  });

// Pokemon voice sounds on click events
  monsters.charmander.addEventListener("click", () => {
      pokeVoice.play();   
  });
  monsters.squirtle.addEventListener("click", () => {
      pokeVoice.play();   
  });
  monsters.bulbasaur.addEventListener("click", () => {
      pokeVoice.play();   
  });

// When the user clicks no, reload the game
menuSelect.no.addEventListener("click", () => {
   if(i){
      location.reload();
   }
  });

// When the user clicks yes, display congratulations screen
menuSelect.yes.addEventListener("click", () => {
   if(i){
      myCongrats.play();
                 myMusic.pause();
      paragraph.innerHTML = ("Congratulations you have selected");
                    pokeName = pokeName.slice(0, -1);
      paragraph.textContent += pokeName += "!";
              
   }
  });
