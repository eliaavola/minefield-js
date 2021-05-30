class Stage extends Sprite{
	constructor(options){
		super(Object.assign({
		x: 0,y: 0,
		w:600,h:600,
		},options));
		this.bloccoX = this.w/colonne,
		this.bloccoY = this.h/righe
	}
	update(){
		for(var j = 0;j < 10;j++){
		for(var i = 0;i < 10;i++){
			prato[j][i] = flagged.nullo;
			stato[j][i] = flagged.nullo;
		}
	}
    for (var mina = 0; mina < 10; mina++) {
      do{
          var x = Math.floor(Math.random() * colonne);
          var y = Math.floor(Math.random() * righe);
      }while(prato[y][x] == flagged.bomb);
      prato[y][x] = flagged.bomb;
    }
    for (var y = 0; y < righe; y++) {
        for (var x = 0; x < colonne; x++) {
            if (prato[y][x] != flagged.bomb) {
                prato[y][x] = bomba.contaMine(x, y);
            }
        }
    }
    var that = this;
    canvas.addEventListener('mousedown', function(e) {
		that.x = e.clientX - canvas.offsetLeft;
		that.y = e.clientY - canvas.offsetTop;
		var pratocoordinateX = Math.floor(that.x / that.bloccoX);
		var pratocoordinateY = Math.floor(that.y / that.bloccoY);
		switch (e.which) {
			case 1:
			bomba.update(pratocoordinateX,pratocoordinateY);
			break;
			case 3:
			flag.update(pratocoordinateX,pratocoordinateY);
			break;
			}
			stage.draw();
			return false;
		});
	}
  	draw(){
		for(var y = 0; y < righe; y++){
			this.y = y * this.bloccoY;
			for(var x = 0;x < colonne; x++){
				this.x = x * this.bloccoX;
				if (stato[y][x] == flagged.rivelato) {
					ctx.fillStyle = '#ddd';
				}
				else {
					ctx.fillStyle = '#777';
				}
				ctx.fillRect(this.x,this.y,this.bloccoX ,this.bloccoY);
				ctx.strokeRect(this.x,this.y,this.bloccoX ,this.bloccoY);
				if (stato[y][x] == flagged.triggered) {
					flag.draw(x,y);
				}
				if (stato[y][x] == flagged.rivelato) {
					switch (prato[y][x]) {
						case 0:
						break;
						case flagged.bomb:
							bomba.draw(x,y);
						break;
						default:
							stage.visualnumeri(x,y);
					}
				}
			}
		}
	}
	visualnumeri(x, y) {
		this.x = x * this.bloccoX;
		this.y = y * this.bloccoY;
		ctx.fillStyle = "black";
		ctx.font = "20pt monospace";
		var text = ctx.measureText("1");
		var size = ctx.measureText(prato[y][x]);
		ctx.fillText(
			prato[y][x],
			this.x + Math.floor(this.bloccoX/ 2) - text.width / 2,
			this.y + Math.floor(this.bloccoY/ 2) + size.width / 2
		);
	}
}

function controllaPosizione(x, y) {
	if( x >= 0 && y >= 0 && x < colonne && y < righe)
		return true;
}

function vittoria() {
      for (var y = 0; y < righe; y++) {
          for (var x = 0; x < colonne; x++) {
              if (prato[y][x] != flagged.bomb ) {
                  if (stato[y][x] != flagged.rivelato) {
                      return false;
                  }
              }
          }
      }
      return true;
  }
function rivelazionePrato(vittoria) {
	for (var y = 0; y < righe; y++) {
		for (var x = 0; x < colonne; x++) {
			if (prato[y][x] == flagged.bomb && vittoria) {
				stato[y][x] = flagged.triggered;
			}
			stato[y][x] = flagged.rivelato;
		}
	}
}
