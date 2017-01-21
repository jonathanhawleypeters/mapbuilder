console.log("map canvas ready");

var canvas = document.getElementById('canvas-map');
	ctx = canvas.getContext('2d');
	imageObj = new Image();
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

	imageObj.onload = draw;
	window.onresize = draw;
	imageObj.src = 'img/basemap/base_magellan.jpg';

function draw(){
	ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
};