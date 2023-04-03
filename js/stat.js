
// define the renderStatistics function, which will be a method of the window object, with the following parameters:
//window.renderStatistics(ctx,names, times)

function renderStatistics(ctx, names, times) {

}
// ctx - the canvas on which the game is drawn.

//Drawing the white cloud
/*
The white cloud at [100, 10] coordinates is 270px high and 420px wide. 
The cloud can be either a regular polygon drawn by the fillRect method or 
an incorrect one drawn using the beginPath, moveTo, closePath, fill, and other methods.
 */

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
const cloudHight = 270;
const cloudWidth = 420;

ctx.fillRect(0, 0, 100, 10)
ctx.fillStyle = 'blue';

var gradient = ctx.createRadialGradient(150, 72, 0, 150, 72, 72);

ctx.strokeStyle = 'blue';
ctx.strokeRect(75, 0, 150, 150);

ctx.beginPath();
ctx.moveTo(100, 100)

ctx.lineTo(80, 60)
ctx.lineTo(110, 80)
ctx.lineTo(125, 40)
ctx.lineTo(140, 80)
ctx.stroke();

