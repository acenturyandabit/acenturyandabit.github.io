function _graphics() {
    this.canvas = document.querySelector("canvas");
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext('2d');

    //add the graident

    // Create gradient
    var grd = this.ctx.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, "purple");
    grd.addColorStop(0.1, "purple");
    grd.addColorStop(1, "lightgreen");

    // Fill with gradient
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);



    this.drawMountain = (x, y, h, angle = 0.5) => {//base of the mountain
        this.ctx.beginPath();
        this.ctx.fillStyle = "purple";
        this.ctx.strokeStyle = "lavender";
        this.ctx.moveTo(x - angle * h / 2, y);
        this.ctx.lineTo(x + angle * h / 2, y);
        this.ctx.lineTo(x, y - h);
        this.ctx.lineTo(x - angle * h / 2, y);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    this.drawTree = (x, y,color, shape,radius,glow) => {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        if (glow)radius-=1;
        switch (shape){
            case 'triangle':
                this.ctx.moveTo(x - radius, y);
                this.ctx.lineTo(x + radius, y);
                this.ctx.lineTo(x, y - radius*2);
                this.ctx.lineTo(x - radius, y);
            break;
            case 'circle':
                this.ctx.arc(x,y-radius,radius,0,Math.PI*2);
            break;
        }
        this.ctx.closePath();
        this.ctx.fill();
        if (glow)this.ctx.stroke();
        //draw the stalk
        this.ctx.fillStyle="black";
        this.ctx.fillRect(x-1,y,2,radius);
    }

}