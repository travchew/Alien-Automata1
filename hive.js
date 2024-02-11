function hexagon(transX, transY, s, r, g, b) {
  push();
  stroke(b, g, r);
  strokeWeight(5);
  fill(r, g, b);
  translate(transX, transY);
  scale(s);
  beginShape();
	vertex(-75, -130);
	vertex(75, -130);
	vertex(150, 0);
	vertex(75, 130);
  vertex(-75, 130);
	vertex(-150, 0);
	endShape(CLOSE); 
	pop();
}

class Hive {
  constructor(x,y,r,g,b,size) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = size;
    this.seed = random(0,1);
    this.hexsize = map(this.size, 38, 45, 0.18, 0.24);
    this.spawnMax = random(30,100);
    this.spawnCounter = 0;
    this.spawnTimer = 0;
    this.angle = random(0,360);
  }
  display() {
    this.hexsize = map(this.size, 38, 45, 0.18, 0.24);
    
    this.alive = true;
    
    push();
    fill(this.r,this.g,this.b);
    translate(this.x,this.y);
    rotate(this.angle);
    hexagon(0, 0, this.hexsize, this.r, this.g, this.b);
    pop();
    if (this.alive) this.angle += .1;
  }
  decay() {
    if (this.size > 0) this.size -= 0.05;
  }
  spawn() {
    this.spawnTimer += 1;
    if (this.spawnCounter > this.spawnMax) this.alive = false;
    else if (this.spawnTimer > 80) {
      let newflake = new Flake(this.x,this.y,this.r,this.g,this.b);
      flakes.push(newflake);
      this.spawnTimer = 0;
      this.spawnCounter += 1;
    }
  }
  
}