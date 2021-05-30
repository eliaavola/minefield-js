class Bomb extends Sprite{
	constructor(options){
		super(Object.assign({
			x: 0,y: 0,
			w:600,h:600,
			imageSrc:"images/bomb.png"
			},options));
				this.bloccoX = this.w/colonne,
				this.bloccoY = this.h/righe
			}
		update(x,y) {
			if (prato[y][x] == flagged.bomb) {
				alert("BOOOM  Game over!");
				flagged.playing = false;
				rivelazionePrato(false);
			//return;
			}
			if (stato[y][x] == flagged.triggered) {
				return;
			}
			if (!flagged.playing) {
			return;
			}
			stato[y][x] = flagged.rivelato;
			if (prato[y][x] == 0) {
			for (var i = -1; i <= 1; i++) {
				for (var j = -1; j <= 1; j++) {
					var xx = x + i,
					yy = y + j;
					if (controllaPosizione(xx, yy) == true) {
						if (stato[yy][xx] != flagged.rivelato) {
							bomba.update(xx, yy);
						}
					}
				}
			}
		}
			if (vittoria()){
			alert("Congratulazioni");
			playing = false;
			rivelazionePrato(true);
			}
		}
		draw(x,y){
			this.x = x * this.bloccoX;
			this.y = y * this.bloccoY;
			ctx.drawImage(this.image, this.x, this.y,this.bloccoX ,this.bloccoY);
		}
		contaMine(x, y) {
		var c = 0;
			for (var i = -1; i <= 1; i++) {
				for (var j = -1; j <= 1; j++) {
					if (i == 0 && j == 0) {
						continue;
					}
					var yy = y + j;
					var xx = x + i;
					if (controllaPosizione(xx, yy) == true) {
						if (prato[yy][xx] == flagged.bomb) {
							c++;
						}
					}
				}
			}
			return c;
		}
}