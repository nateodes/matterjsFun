// module aliases
// var Matter = require("Matter.js")
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});


var rectangle = "";
var circle = ""; 
var polygon = "";



var shapes = [];

var options = {
	friction: 0.1,
	restitution: 0.8,
	render: {
		fillStyle: 'red',
         strokeStyle: 'blue',
         lineWidth: 3
	}
};






// create two boxes and a ground
function setup () {
 polygon = Bodies.polygon(300, 150, 7, 40, options)
 circle = Bodies.circle(300, 200, 30, options) 
 rectangle = Bodies.rectangle(400, 200, 80, 80, options);
 
 ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
 shapes.push(circle, rectangle, ground);
// add all of the bodies to the world
World.add(engine.world, shapes);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

Matter.Bounds.create(500, 700, 810, 60)

};



setup();
$("canvas").on("click", function(x, y, w, h){

	var x = Math.floor(Math.random() * 400) +140;
	var y = Math.floor(Math.random() * 170) +90;
	this.body = Bodies.rectangle(x, y, 50, 50, options)

	World.add(engine.world, this.body);
	
	return
});

// function addBox (x, y, w, h) {
// 	this.body = bodies.rectangle(300, 200, 80, 80, options)
// 	World.add(engine.world, this.body)
// }