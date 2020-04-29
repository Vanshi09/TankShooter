// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var ground1;

const {Engine} = Matter 
//is the same as c onst 
const Engine = Matter.Engine



function setup() {
    createCanvas(400,400);
    ground1 = new Ground(200,20,400,10);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    
    ground1.display();

// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}