class Sqorpse {
  constructor(x,y,r,g,b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = random(3,15)
    this.seed = random(0,1);
    this.alive = true;
    this.growspeed = random(0.01,0.04);
  }
  display() {
    push();
    fill(this.r,this.g,this.b);
    if (this.alive) rect(random(this.x-1,this.x+1),random(this.y-1,this.y+1),random(this.size-1,this.size+1));
    pop();
  }
  collision() {
    for (let i = 0; i < flakes.length; i++) {
      if ((dist(this.x,this.y,flakes[i].x,flakes[i].y) < this.size) && this.alive) {
        let newcircle = new Circle(this.x,this.y,i,this.size);
        circles.push(newcircle);
        this.alive = false;
      }
    }
  }
  grow() {
    this.size += this.growspeed;
  }
  
}

