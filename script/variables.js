// var audio = new Audio('song.mp3');
// audio.play();

window.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');
const colonne = 10;
const righe = 10;

const flagged = {
	nullo : 0,
	triggered :1,
	rivelato : 2,
	bomb : -1,
	playing : true,
};

var prato = new Array(10);
var stato = new Array(10);
for (var i = 0; i < 10; i++) {
	prato[i] = new Array(10);
	stato[i] = new Array(10);
}

class Sprite{
	constructor(options){
		//default value
		this.x = 0; this.y = 0;
		this.w = 0; this.h = 0;
		this.bloccoX = this.w/colonne;
		this.bloccoY = this.h/righe;
		this.imageSrc = "";
		//Custom value
		Object.assign(this,options);
		//Sprite initialization
		this.image =  new Image();
		this.image.src = this.imageSrc;
    }
}