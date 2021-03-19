class Square {
  constructor(x, y, r, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.b = b;
  }

  show() {
    noStroke();
    fill(this.r, 0, this.b);
    rect(this.x * table.w, this.y * table.w, table.w, table.w);
  }

}

let table;

function keyPressed() {
  if (keyCode == 32) {
    table.sortRed();
    
  }
}


function setup() {
  createCanvas(400, 400);
  table = new Board(10, 10);
  table.strt();
}

function draw() {
  background(220);
  table.show();
}

setup();

draw();