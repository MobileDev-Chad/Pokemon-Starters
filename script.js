const openBall = {
   red: document.querySelector(".pokeball:nth-of-type(1)"),
   blue: document.querySelector(".pokeball:nth-of-type(2)"),
   green: document.querySelector(".pokeball:nth-of-type(3)")}
;
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
let pokeName;
let pokeStart = false;

function release () {
   if (!pokeStart) {
      i.classList.add("pokeballShake");
      setTimeout(() => {
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
    i = openBall.red;
    m = monsters.charmander;
    pokeName = " Charmander?"
      release();
   }
  });

openBall.blue.addEventListener("click", () => {
   if(!i){
    i = openBall.blue;
    m = monsters.squirtle;
    pokeName = " Squirtle?"
       release();
   }
  });

openBall.green.addEventListener("click", () => {
   if(!i){
    i = openBall.green;
    m = monsters.bulbasaur;
    pokeName = " Bulbasaur?"
       release();
   }
  });

  openBall.red.addEventListener("mouseover", () => {
   if(!i){
      arrow.style.display = "block";
      arrow.style.left = "-35px"
   }
  });
  openBall.red.addEventListener("mouseout", () => {
      arrow.style.display = "none";
  });

  openBall.blue.addEventListener("mouseover", () => {
   if(!i){
      arrow.style.display = "block";
      arrow.style.left = "225px"
   }
  });
  openBall.blue.addEventListener("mouseout", () => {
      arrow.style.display = "none";
  });

  openBall.green.addEventListener("mouseover", () => {
   if(!i){
      arrow.style.display = "block";
      arrow.style.left = "-300px"
   }
  });
  openBall.green.addEventListener("mouseout", () => {
      arrow.style.display = "none";
  });

// When the user clicks no, reload the game
menuSelect.no.addEventListener("click", () => {
   if(i){
      location.reload();
   }
  });
