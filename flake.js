class Flake {
  constructor(x,y,r,g,b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = random(3,15)
    this.seed = random(0,1);
    
    this.hv = random(-1,1);
    this.vv = random(-1,1);
  }
  display() {
    push();
    noStroke();
    fill(this.g,this.b,this.r);
    ellipse(this.x,this.y,3,3);
    //bezier(this.x,this.y,this.x+10,this.y+10);
    pop();
  }
  move() {
    this.x += this.hv;
    this.y += this.vv;
  }
}