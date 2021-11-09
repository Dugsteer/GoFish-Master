// variables
const container = document.getElementById("container");
let counter = 0;
let deck = true;
const halloweenTiles = [
  ["img/broomstick.svg", "witch"],
  ["img/witch.svg", "werewolf"],
  ["img/werewolf.svg", "zombie"],
  ["img/zombie.svg", "bat"],
  ["img/bat.svg", "cauldron"],
  ["img/cauldron.svg", "Frankenstein"],
  ["img/frankenstein.svg", "ghost"],
  ["img/ghost.svg", "tomb"],
  ["img/grave.svg", "monster"],
  ["img/monster.svg", "mummy"],
  ["img/mummy.svg", "pumpkin"],
  ["img/pumpkin.svg", "skeleton"],
  ["img/skeleton.svg", "skull"],
  ["img/skull.svg", "spider"],
  ["img/spider.svg", "bone"],
  ["img/bone.svg", "cat"],
  ["img/cat.svg", "candy"],
  ["img/candy.svg", "wand"],
  ["img/wand.svg", "fangs"],
  ["img/fangs.svg", "broomstick"],
];
const sportsTiles = [
  "climbing",
  "hang-gliding",
  "paddle-surfing",
  "rugby",
  "basketball",
  "cycling",
  "diving",
  "football",
  "golf",
  "gymnastics",
  "hockey",
  "ice-skating",
  "karate",
  "running",
  "sailing",
  "table-tennis",
  "swimming",
  "tennis",
  "surfing",
  "yoga",
  "horse-riding",
  "archery",
  "climbing",
  "badminton",
];

const foodTiles = [
  "apple",
  "banana",
  "bread",
  "burger",
  "cake",
  "carrot",
  "chicken",
  "chips",
  "donut",
  "egg",
  "fish",
  "grapes",
  "honey",
  "ice-cream",
  "jam",
  "kiwi",
  "lettuce",
  "mushrooms",
  "nuts",
  "onion",
  "pizza",
  "potatoes",
  "spaghetti",
  "tomato",
];

const animaltiles = [
  "Ant",
  "Bear",
  "Bee",
  "Bird",
  "Butterfly",
  "Cat",
  "Caterpillar",
  "Chicken",
  "Cow",
  "Crab",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dolphin",
  "Dragonfly",
  "Duck",
  "Elephant",
  "Fish",
  "Frog",
  "Giraffe",
  "Gorilla",
  "Horse",
  "Kangaroo",
  "Leopard",
  "Lion",
  "Octopus",
  "Panda", 
  "Pig",
  "Rhinoceros",
  "Spider",
  "Turtle",
  "Whale"
]

let tiletype = "svg";
let tiles = animaltiles;

// Add new playing card
function newTile() {
  if (deck === true) {
    // CHECK IF IMAGES ARE SVG JPG or PNG and adjust accordingly.
    container.insertAdjacentHTML(
      "afterend",
      ` <div class="gofish">
          <div class="cards cardtop">    <img class="poker1" src="img/poker-cards.png" alt="">
            <img class="poker1" src="img/poker-cards.png" alt="">
          </div>
          <div class="cardcenter">
          <h3 class="h3class">Would you like a pet...</h3>
          <div class="gofishimg"><img src="img/${
            tiles[counter]
          }.${tiletype}" alt=""></div>
          <h2 class="h2class">${tiles[counter].replace("-", " ").toLowerCase()}?</h2>
          </div>
          <div class="cards cardbottom">        <img class="poker1" src="img/poker-cards.png" alt="">
            <img class="poker1" src="img/poker-cards.png" alt="">
          </div>
      </div>`
    );

    if (counter < tiles.length - 1) {
      counter++;
    } else {
      deck = false;
    }
    newTile();
  }
}

// Drag domino function
newTile();
