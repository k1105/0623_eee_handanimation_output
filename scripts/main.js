function setup() {
  i = 0;
  step = 0.1;
  hand = new HandAnimation(data, step);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(255, 10, 10);
  strokeWeight(10);
}

let toggle = false;
let pos = 0;

function draw() {
  background(0);
  translate(width, height / 2);
  scale(3);

  if (i > 0) {
    const delta = hand.indexFinger(i)[3].x - hand.indexFinger(i - step)[3].x;
    if (delta < 0) {
      pos += delta * 1.5;
    }
    pos -= i / 80;
    translate(pos, 0);
  } else {
    pos = 0;
    translate(0, 0);
  }

  push();
  noStroke();
  fill(255, 10, 10);
  ellipse(10, -20, 50, 50);
  ellipse(0, 0, 30, 30);
  ellipse(0, 0, 10, 10);
  pop();
  rotate((2 * PI) / 3);
  for (let j = 0; j < PI / 3; j += PI / 8) {
    rotate(j);
    const indexFinger = hand.indexFinger(i);
    const palm = hand.palm(i);
    point(indexFinger[0].x - palm[0].x, indexFinger[0].y - palm[0].y);
    point(indexFinger[1].x - palm[0].x, indexFinger[1].y - palm[0].y);
    point(indexFinger[2].x - palm[0].x, indexFinger[2].y - palm[0].y);
    point(indexFinger[3].x - palm[0].x, indexFinger[3].y - palm[0].y);
  }

  i = (i + step) % data.length;
}
