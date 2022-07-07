function setup() {
  i = 0;
  step = 0.1;
  hand = new HandAnimation(data8, step);
  hand2 = new HandAnimation(data8, step);
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
  translate(0, 400);

  push(); //thumb
  translate(200, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Thumb", -15, 30);
  pop();
  line(0, 0, thumb[0].x, thumb[0].y);
  line(thumb[0].x, thumb[0].y, thumb[1].x, thumb[1].y);
  line(thumb[1].x, thumb[1].y, thumb[2].x, thumb[2].y);
  line(thumb[2].x, thumb[2].y, thumb[3].x, thumb[3].y);
  pop();

  push(); //index finger
  translate(400, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Index Finger", -20, 30);
  pop();
  line(0, 0, indexFinger[0].x, indexFinger[0].y);
  line(indexFinger[0].x, indexFinger[0].y, indexFinger[1].x, indexFinger[1].y);
  line(indexFinger[1].x, indexFinger[1].y, indexFinger[2].x, indexFinger[2].y);
  line(indexFinger[2].x, indexFinger[2].y, indexFinger[3].x, indexFinger[3].y);
  pop();

  push(); //middle finger
  translate(600, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Middle Finger", -20, 30);
  pop();
  line(0, 0, middleFinger[0].x, middleFinger[0].y);
  line(
    middleFinger[0].x,
    middleFinger[0].y,
    middleFinger[1].x,
    middleFinger[1].y
  );
  line(
    middleFinger[1].x,
    middleFinger[1].y,
    middleFinger[2].x,
    middleFinger[2].y
  );
  line(
    middleFinger[2].x,
    middleFinger[2].y,
    middleFinger[3].x,
    middleFinger[3].y
  );
  pop();

  push(); //ring finger
  translate(800, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Ring Finger", -20, 30);
  pop();
  line(0, 0, ringFinger[0].x, ringFinger[0].y);
  line(ringFinger[0].x, ringFinger[0].y, ringFinger[1].x, ringFinger[1].y);
  line(ringFinger[1].x, ringFinger[1].y, ringFinger[2].x, ringFinger[2].y);
  line(ringFinger[2].x, ringFinger[2].y, ringFinger[3].x, ringFinger[3].y);
  pop();

  push(); //pinky finger
  translate(1000, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Pinky", -10, 30);
  pop();
  line(0, 0, pinky[0].x, pinky[0].y);
  line(pinky[0].x, pinky[0].y, pinky[1].x, pinky[1].y);
  line(pinky[1].x, pinky[1].y, pinky[2].x, pinky[2].y);
  line(pinky[2].x, pinky[2].y, pinky[3].x, pinky[3].y);
  pop();

  push(); //whole
  translate(1400, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Whole", -10, 30);
  pop();
  line(0, 0, thumb[0].x, thumb[0].y);
  line(thumb[0].x, thumb[0].y, thumb[1].x, thumb[1].y);
  line(thumb[1].x, thumb[1].y, thumb[2].x, thumb[2].y);
  line(thumb[2].x, thumb[2].y, thumb[3].x, thumb[3].y);
  line(0, 0, indexFinger[0].x, indexFinger[0].y);
  line(indexFinger[0].x, indexFinger[0].y, indexFinger[1].x, indexFinger[1].y);
  line(indexFinger[1].x, indexFinger[1].y, indexFinger[2].x, indexFinger[2].y);
  line(indexFinger[2].x, indexFinger[2].y, indexFinger[3].x, indexFinger[3].y);
  line(0, 0, middleFinger[0].x, middleFinger[0].y);
  line(
    middleFinger[0].x,
    middleFinger[0].y,
    middleFinger[1].x,
    middleFinger[1].y
  );
  line(
    middleFinger[1].x,
    middleFinger[1].y,
    middleFinger[2].x,
    middleFinger[2].y
  );
  line(
    middleFinger[2].x,
    middleFinger[2].y,
    middleFinger[3].x,
    middleFinger[3].y
  );
  line(0, 0, ringFinger[0].x, ringFinger[0].y);
  line(ringFinger[0].x, ringFinger[0].y, ringFinger[1].x, ringFinger[1].y);
  line(ringFinger[1].x, ringFinger[1].y, ringFinger[2].x, ringFinger[2].y);
  line(ringFinger[2].x, ringFinger[2].y, ringFinger[3].x, ringFinger[3].y);
  line(0, 0, pinky[0].x, pinky[0].y);
  line(pinky[0].x, pinky[0].y, pinky[1].x, pinky[1].y);
  line(pinky[1].x, pinky[1].y, pinky[2].x, pinky[2].y);
  line(pinky[2].x, pinky[2].y, pinky[3].x, pinky[3].y);
  pop();
  pop();

  palm = hand2.palm(i);
  indexFinger = hand2.indexFinger(i, palm[0]);
  thumb = hand2.thumb(i, palm[0]);
  middleFinger = hand2.middleFinger(i, palm[0]);
  ringFinger = hand2.ringFinger(i, palm[0]);
  pinky = hand2.pinky(i, palm[0]);

  push();
  translate(0, 600);

  push(); //thumb
  translate(200, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Thumb", -15, 30);
  pop();
  line(0, 0, thumb[0].x, thumb[0].y);
  line(thumb[0].x, thumb[0].y, thumb[1].x, thumb[1].y);
  line(thumb[1].x, thumb[1].y, thumb[2].x, thumb[2].y);
  line(thumb[2].x, thumb[2].y, thumb[3].x, thumb[3].y);
  pop();

  push(); //index finger
  translate(400, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Index Finger", -20, 30);
  pop();
  line(0, 0, indexFinger[0].x, indexFinger[0].y);
  line(indexFinger[0].x, indexFinger[0].y, indexFinger[1].x, indexFinger[1].y);
  line(indexFinger[1].x, indexFinger[1].y, indexFinger[2].x, indexFinger[2].y);
  line(indexFinger[2].x, indexFinger[2].y, indexFinger[3].x, indexFinger[3].y);
  pop();

  push(); //middle finger
  translate(600, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Middle Finger", -20, 30);
  pop();
  line(0, 0, middleFinger[0].x, middleFinger[0].y);
  line(
    middleFinger[0].x,
    middleFinger[0].y,
    middleFinger[1].x,
    middleFinger[1].y
  );
  line(
    middleFinger[1].x,
    middleFinger[1].y,
    middleFinger[2].x,
    middleFinger[2].y
  );
  line(
    middleFinger[2].x,
    middleFinger[2].y,
    middleFinger[3].x,
    middleFinger[3].y
  );
  pop();

  push(); //ring finger
  translate(800, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Ring Finger", -20, 30);
  pop();
  line(0, 0, ringFinger[0].x, ringFinger[0].y);
  line(ringFinger[0].x, ringFinger[0].y, ringFinger[1].x, ringFinger[1].y);
  line(ringFinger[1].x, ringFinger[1].y, ringFinger[2].x, ringFinger[2].y);
  line(ringFinger[2].x, ringFinger[2].y, ringFinger[3].x, ringFinger[3].y);
  pop();

  push(); //pinky finger
  translate(1000, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Pinky", -10, 30);
  pop();
  line(0, 0, pinky[0].x, pinky[0].y);
  line(pinky[0].x, pinky[0].y, pinky[1].x, pinky[1].y);
  line(pinky[1].x, pinky[1].y, pinky[2].x, pinky[2].y);
  line(pinky[2].x, pinky[2].y, pinky[3].x, pinky[3].y);
  pop();

  push(); //whole
  translate(1400, 0);
  scale(3);
  push();
  noStroke();
  fill(255);
  textSize(7);
  text("Whole", -10, 30);
  pop();
  line(0, 0, thumb[0].x, thumb[0].y);
  line(thumb[0].x, thumb[0].y, thumb[1].x, thumb[1].y);
  line(thumb[1].x, thumb[1].y, thumb[2].x, thumb[2].y);
  line(thumb[2].x, thumb[2].y, thumb[3].x, thumb[3].y);
  line(0, 0, indexFinger[0].x, indexFinger[0].y);
  line(indexFinger[0].x, indexFinger[0].y, indexFinger[1].x, indexFinger[1].y);
  line(indexFinger[1].x, indexFinger[1].y, indexFinger[2].x, indexFinger[2].y);
  line(indexFinger[2].x, indexFinger[2].y, indexFinger[3].x, indexFinger[3].y);
  line(0, 0, middleFinger[0].x, middleFinger[0].y);
  line(
    middleFinger[0].x,
    middleFinger[0].y,
    middleFinger[1].x,
    middleFinger[1].y
  );
  line(
    middleFinger[1].x,
    middleFinger[1].y,
    middleFinger[2].x,
    middleFinger[2].y
  );
  line(
    middleFinger[2].x,
    middleFinger[2].y,
    middleFinger[3].x,
    middleFinger[3].y
  );
  line(0, 0, ringFinger[0].x, ringFinger[0].y);
  line(ringFinger[0].x, ringFinger[0].y, ringFinger[1].x, ringFinger[1].y);
  line(ringFinger[1].x, ringFinger[1].y, ringFinger[2].x, ringFinger[2].y);
  line(ringFinger[2].x, ringFinger[2].y, ringFinger[3].x, ringFinger[3].y);
  line(0, 0, pinky[0].x, pinky[0].y);
  line(pinky[0].x, pinky[0].y, pinky[1].x, pinky[1].y);
  line(pinky[1].x, pinky[1].y, pinky[2].x, pinky[2].y);
  line(pinky[2].x, pinky[2].y, pinky[3].x, pinky[3].y);
  pop();
  pop();

  i += step;
}
