// var bg = function( p ) { // p could be any variable name
//   var x = 100; 
//   var y = 100;
//   p.setup = function() {
//     p.createCanvas( window.innerWidth, window.innerHeight );
//   };

//   p.draw = function() {
//     p.background(67);
//     p.fill(255);
//     p.rect(x,y,50,50);
//   };
// };
// var myp5 = new p5(bg, 'bgs');


var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'c2');