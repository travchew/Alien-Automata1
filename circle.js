class Circle {
  constructor(x,y,i,size) {
    this.x = x;
    this.y = y;
    this.alive = true;
    this.i = i;
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    this.size = size;
    this.dsize = size;
    this.xseed = (random(0,1));
    this.yseed = (random(0,1));
    this.xoff = 0;
    this.xoff_change = (random(0,0.001));
    this.yoff = 0;
    this.yoff_change = (random(0,0.001));
    
    this.hivesize = random(38,45);
  }
  display() {
    push();
    stroke(this.b,this.r,this.g);
    fill(this.r,this.g,this.b);
    this.dsize = map(noise(this.xseed + this.yoff), 0, 1, this.size-3, this.size+3)
    if (this.alive) ellipse(this.x,this.y,this.dsize,this.dsize);
    this.size -= 0.05;
    pop();
  }
  move() {
    this.x += map(noise(this.xseed + this.xoff), 0, 1, -5, 5);
    this.y += map(noise(this.yseed + this.yoff), 0, 1, -5, 5);
    this.xoff += this.xoff_change;
    this.yoff += this.yoff_change;
    
    if (this.x > windowWidth+abs(this.size)) this.x = 0-abs(this.size);
    else if (this.x < 0-abs(this.size)) this.x = windowWidth+abs(this.size);
    if (this.y > windowHeight+abs(this.size)) this.y = 0-abs(this.size);
    else if (this.y < 0-abs(this.size)) this.y = windowHeight+abs(this.size);
    
  }
  collision() {
    for (let i = 0; i < circles.length; i++) {
      if (((dist(circles[i].x,circles[i].y,this.x,this.y)) < this.size) && ((dist(circles[i].x,circles[i].y,this.x,this.y)) > 0)) {
        this.size += 0.4;
      }
    }
  } 
  death() {
    if (this.size < 0) {
      let newsqorpse = new Sqorpse(this.x,this.y,this.r,this.g,this.b);
      if (this.alive == true) sqorpses.push(newsqorpse);
      this.alive = false;
    } 
    else if (this.size > this.hivesize) {
      let newhive = new Hive(this.x,this.y,this.r,this.g,this.b,this.size);
      if (this.alive == true) hives.push(newhive);
      this.alive = false;
    }
  }
}