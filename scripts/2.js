function setup() {
  i = 0;
  step = 0.1;
  hand = new HandAnimation(data3, step);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(255);
  strokeWeight(5);
}

let toggle = false;
let pos = 0;

function draw() {
  background(0);
  const palm = hand.palm(i);
  const indexFinger = hand.indexFinger(i, palm[0]);
  const thumb = hand.thumb(i, palm[0]);
  const middleFinger = hand.middleFinger(i, palm[0]);
  const ringFinger = hand.ringFinger(i, palm[0]);
  const pinky = hand.pinky(i, palm[0]);

  push(); //thumb
  translate(200, height / 2);
  scale(3);
  point(0, 0);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Thumb", -15, 30);
  pop();
  point(thumb[0].x, thumb[0].y);
  point(thumb[1].x, thumb[1].y);
  point(thumb[2].x, thumb[2].y);
  point(thumb[3].x, thumb[3].y);
  pop();

  push(); //index finger
  translate(400, height / 2);
  scale(3);
  point(0, 0);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Index Finger", -20, 30);
  pop();
  point(indexFinger[0].x, indexFinger[0].y);
  point(indexFinger[1].x, indexFinger[1].y);
  point(indexFinger[2].x, indexFinger[2].y);
  point(indexFinger[3].x, indexFinger[3].y);
  pop();

  push(); //middle finger
  translate(600, height / 2);
  scale(3);
  point(0, 0);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Middle Finger", -20, 30);
  pop();
  point(middleFinger[0].x, middleFinger[0].y);
  point(middleFinger[1].x, middleFinger[1].y);
  point(middleFinger[2].x, middleFinger[2].y);
  point(middleFinger[3].x, middleFinger[3].y);
  pop();

  push(); //ring finger
  translate(800, height / 2);
  scale(3);
  point(0, 0);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Ring Finger", -20, 30);
  pop();
  point(ringFinger[0].x, ringFinger[0].y);
  point(ringFinger[1].x, ringFinger[1].y);
  point(ringFinger[2].x, ringFinger[2].y);
  point(ringFinger[3].x, ringFinger[3].y);
  pop();

  push(); //pinky finger
  translate(1000, height / 2);
  scale(3);
  point(0, 0);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Pinky", -10, 30);
  pop();
  point(pinky[0].x, pinky[0].y);
  point(pinky[1].x, pinky[1].y);
  point(pinky[2].x, pinky[2].y);
  point(pinky[3].x, pinky[3].y);
  pop();

  push(); //pinky finger
  translate(1400, height / 2);
  scale(3);
  point(0, 0);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Whole", -10, 30);
  pop();
  point(thumb[0].x, thumb[0].y);
  point(thumb[1].x, thumb[1].y);
  point(thumb[2].x, thumb[2].y);
  point(thumb[3].x, thumb[3].y);
  point(indexFinger[0].x, indexFinger[0].y);
  point(indexFinger[1].x, indexFinger[1].y);
  point(indexFinger[2].x, indexFinger[2].y);
  point(indexFinger[3].x, indexFinger[3].y);
  point(middleFinger[0].x, middleFinger[0].y);
  point(middleFinger[1].x, middleFinger[1].y);
  point(middleFinger[2].x, middleFinger[2].y);
  point(middleFinger[3].x, middleFinger[3].y);
  point(ringFinger[0].x, ringFinger[0].y);
  point(ringFinger[1].x, ringFinger[1].y);
  point(ringFinger[2].x, ringFinger[2].y);
  point(ringFinger[3].x, ringFinger[3].y);
  point(pinky[0].x, pinky[0].y);
  point(pinky[1].x, pinky[1].y);
  point(pinky[2].x, pinky[2].y);
  point(pinky[3].x, pinky[3].y);
  pop();

  i = (i + step) % data.length;
}
