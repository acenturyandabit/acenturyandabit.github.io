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
    this.mountains=[];
    this.trees={};
    this.drawEverything=()=>{
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let m of this.mountains){
            this.ctx.beginPath();
            this.ctx.fillStyle = "purple";
            this.ctx.strokeStyle = "lavender";
            this.ctx.moveTo(m.x - m.angle * m.h / 2, m.y);
            this.ctx.lineTo(m.x + m.angle * m.h / 2, m.y);
            this.ctx.lineTo(m.x, m.y - m.h);
            this.ctx.lineTo(m.x - m.angle * m.h / 2, m.y);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }
        for (let tt in this.trees){
            t=this.trees[tt];
            this.ctx.fillStyle = t.color;
            this.ctx.beginPath();
            switch (t.shape) {
                case 'triangle':
                    this.ctx.moveTo(t.x - t.radius, t.y);
                    this.ctx.lineTo(t.x + t.radius, t.y);
                    this.ctx.lineTo(t.x, t.y - t.radius * 2);
                    this.ctx.lineTo(t.x - t.radius, t.y);
                    break;
                case 'circle':
                    this.ctx.arc(t.x, t.y - t.radius, t.radius, 0, Math.PI * 2);
                    break;
                case 'hexagon':
                    this.ctx.moveTo(t.x, t.y);
                    this.ctx.lineTo(t.x + Math.sqrt(3) * t.radius/2, t.y - t.radius / 2);
                    this.ctx.lineTo(t.x + Math.sqrt(3) * t.radius/2, t.y - t.radius * 3 / 2);
                    this.ctx.lineTo(t.x, t.y - 2 * t.radius);
                    this.ctx.lineTo(t.x - Math.sqrt(3) * t.radius/2, t.y - 3 * t.radius / 2);
                    this.ctx.lineTo(t.x - Math.sqrt(3) * t.radius/2, t.y - t.radius / 2);
                    this.ctx.lineTo(t.x, t.y);
                    break;
            }
            this.ctx.closePath();
            this.ctx.fill();
            if (t.glow) this.ctx.stroke();
            //draw the stalk
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(t.x - 1, t.y, 2, t.radius);
        }
    }

    this.drawMountain = (x, y, h, angle = 0.5) => {//base of the mountain
        this.mountains.push({x:x,y:y,h:h,angle:angle});
        this.drawEverything();
    }

    this.drawTree = (id,x, y, color, shape, radius, glow) => {
        this.trees[id]={x,y,color,shape,radius,glow};
        this.drawEverything();
    }

}