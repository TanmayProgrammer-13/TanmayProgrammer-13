import kaboom from "kaboom"

// Setting a title for the page
document.title = 'Thieves & Police'

// Initialize context
kaboom({
  font: "sink",
  background: [ 110, 110, 255, ],
})

// Lets load the Sprites
loadSprite("theif", "sprites/theif.png");
loadSprite("coin", "sprites/coin.png");
loadSprite("police", "sprites/police.png");

// Lets define some game variables
let SPEED = 620
let BSPEED = 2
let SCORE = 0
let scoreText;

// Lets define a function to display our score
const displayScore = ()=>{
  destroy(scoreText)
  // a simple score counter
  scoreText = add([
      text("Score: " + SCORE),
      scale(3),
      pos(width() - 181, 21),
      color(5, 5, 205)
  ])
}



// Lets add the player
const player = add([
    sprite("theif"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    scale(0.2), 
])

// Lets add events to our player 
onKeyDown("left", () => {
  player.move(-SPEED, 0)
})

onKeyDown("right", () => {
  player.move(SPEED, 0)
})

onKeyDown("up", () => {
  player.move(0, -SPEED)
})

onKeyDown("down", () => {
  player.move(0, SPEED)
})

// Adding Police In the Game
loop(4,()=>{
  for(let i=0; i<4; i++){
    let x = rand(0, width())
    let y = height()

    let c = add([
       sprite("police"),   
       pos(x, y),   
       area(),
       scale(0.3), 
       "police"
    ])
    c.onUpdate(()=>{
      c.moveTo(c.pos.x, c.pos.y - BSPEED)
    })
  }
  
  let x = rand(0, width())
  let y = height()
  
  // Lets introduce a coffee for our programmer to drink
  let c = add([
     sprite("coin"),   
     pos(x, y),   
     area(),
     scale(0.11), 
     "coin"
  ])
  c.onUpdate(()=>{
    c.moveTo(c.pos.x, c.pos.y - BSPEED)
  })
  if(BSPEED<13){ 
    BSPEED +=1
  }
})

player.onCollide("police", () => {
  destroy(player)
  addKaboom(player.pos)
  scoreText = add([
      text("Game Over"),
      scale(3),
      pos(10, 21),
      color(10, 10, 255)
  ])
})

player.onCollide("coin", (coin) => {
  destroy(coin)
  SCORE += 1
  displayScore()
  // 2 seconds until the volume is back
  wait(2, () => {
  })
})


// Display the score
displayScore()
