console.log("map canvas ready");

var canvas = document.querySelector('.map-canvas');
var ctx = canvas.getContext('2d');
var imageObj = new Image();

canvas.width = 1000;
canvas.height = 667;

imageObj.onload = draw;
window.onresize = draw;
imageObj.src = 'img/basemap/base_magellan.jpg';

function draw(){
	ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
};