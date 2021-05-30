class Flag extends Sprite{
    constructor(options){
      super(Object.assign({
        x: 0,y: 0,
        w:600,h:600,
        imageSrc:"images/flag.png"
      },options));
      this.bloccoX = this.w/colonne;
      this.bloccoY = this.w/colonne;
      }
      update(x, y) {
          if (stato[y][x] == flagged.rivelato) {
              return;
          }
          stato[y][x] = 1 - stato[y][x];
      }
      draw(x,y){
        this.x = x * this.bloccoX;
        this.y = y * this.bloccoY;
        ctx.drawImage(this.image, this.x, this.y,this.bloccoX ,this.bloccoY);
      }
  }