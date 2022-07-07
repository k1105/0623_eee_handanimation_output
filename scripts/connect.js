function setup() {
  i = 0;
  step = 0.1;
  hand = new HandAnimation(data, step);
  hand2 = new HandAnimation(data2, step);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(255);
  strokeWeight(5);
}

let toggle = false;
let pos = 0;

function draw() {
  background(0);
  palm = hand.palm(i);
  indexFinger = hand.indexFinger(i, palm[0]);
  thumb = hand.thumb(i, palm[0]);
  middleFinger = hand.middleFinger(i, palm[0]);
  ringFinger = hand.ringFinger(i, palm[0]);
  pinky = hand.pinky(i, palm[0]);

  push();
  translate(0, 800);

  push(); //index finger
  translate(800, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Index Finger + Pinky", -30, 30);
  pop();
  line(0, 0, indexFinger[0].x, indexFinger[0].y);
  line(indexFinger[0].x, indexFinger[0].y, indexFinger[1].x, indexFinger[1].y);
  line(indexFinger[1].x, indexFinger[1].y, indexFinger[2].x, indexFinger[2].y);
  line(indexFinger[2].x, indexFinger[2].y, indexFinger[3].x, indexFinger[3].y);
  translate(indexFinger[3].x, indexFinger[3].y);
  rotate((3 * PI) / 2);
  line(0, 0, pinky[0].x, pinky[0].y);
  line(pinky[0].x, pinky[0].y, pinky[1].x, pinky[1].y);
  line(pinky[1].x, pinky[1].y, pinky[2].x, pinky[2].y);
  line(pinky[2].x, pinky[2].y, pinky[3].x, pinky[3].y);

  pop();
  pop();

  i += step;
}
