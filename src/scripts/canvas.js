console.log("map canvas ready");

var canvas = document.querySelector('.map-canvas');
var ctx = canvas.getContext('2d');
var baseMap = new Image();
var titleMap = new Image();

canvas.width = 1000;
canvas.height = 667;

window.onload = draw;
//window.onresize = draw;

baseMap.src = 'img/basemap/base_magellan.jpg';
titleMap.src = 'img/basemap/title_magellan.svg';

function draw(){

	ctx.drawImage(baseMap, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(titleMap, 0, 0, canvas.width, canvas.height);
}