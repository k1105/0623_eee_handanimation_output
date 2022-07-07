function setup() {
  i = 0;
  step = 0.1;
  hand = new HandAnimation(data2, step);
  hand2 = new HandAnimation(data2, step);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  translate(width / 2, 600);
  scale(5);
  textSize(5);
  text("Whole\n(Convex envelope)", -20, 17);
  palm = hand.palm(i);
  indexFinger = hand.indexFinger(i, palm[0]);
  thumb = hand.thumb(i, palm[0]);
  middleFinger = hand.middleFinger(i, palm[0]);
  ringFinger = hand.ringFinger(i, palm[0]);
  pinky = hand.pinky(i, palm[0]);

  points = [
    { x: 0, y: 0 },
    thumb[0],
    thumb[1],
    thumb[2],
    thumb[3],
    indexFinger[0],
    indexFinger[1],
    indexFinger[2],
    indexFinger[3],
    middleFinger[0],
    middleFinger[1],
    middleFinger[2],
    middleFinger[3],
    ringFinger[0],
    ringFinger[1],
    ringFinger[2],
    ringFinger[3],
    pinky[0],
    pinky[1],
    pinky[2],
    pinky[3],
  ];
  convex_indices = giftwrap(points);
  beginShape();
  for (let m = 0; m < convex_indices.length; m++) {
    vertex(points[convex_indices[m]].x, points[convex_indices[m]].y);
  }
  endShape(CLOSE);
  i += step;
}
