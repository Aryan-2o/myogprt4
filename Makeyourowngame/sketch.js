var canvas, backgroundImage;

var gameState = 0;
var playerCount=0
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, track, car1_img, coin, fence, fence_img, coin_img, coin1,coin2,coin3,coin4,coin5


function preload(){
  track = loadImage("../images/Park.jpg");
  car1_img = loadImage("../images/Player.png");
car1_img.scale=0.1
coin_img= loadImage("../images/coin.png")
fence_img = loadImage("../images/fence.png")

 
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
