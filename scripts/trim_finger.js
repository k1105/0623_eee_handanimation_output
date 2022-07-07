function setup() {
  i = 0;
  step = 0.1;
  hand = new HandAnimation(data4, step);
  hand2 = new HandAnimation(data5, step);
  hand3 = new HandAnimation(data7, step * 10);
  hand.setRange(26, 28);
  hand2.setRange(70, 75);
  hand3.setRange(70, 80);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  translate(width / 2, 600);

  //translate(i * 10, 0);

  scale(3);
  textSize(5);
  //text("Whole\n(Convex envelope)", -20, 17);
  palm = hand.palm(i);
  indexFinger = hand.indexFinger(i / 2);
  indexFinger = hand.indexFinger(i / 2, indexFinger[0]);
  indexFinger2 = hand2.indexFinger(i, hand2.palm(i)[0]);
  indexFinger3 = hand3.indexFinger(i * 2, hand3.indexFinger(i * 2)[0]);
  indexFinger4 = hand3.indexFinger(
    i * 2 + 25,
    hand3.indexFinger(i * 2 + 25)[0]
  );
  //tail
  push();
  rotate((3.1 * PI) / 2);
  drawInterporatedEllipse(
    map(0, 0, 100, 100, 0) - 100,
    0,
    map(indexFinger[1].x, 0, 100, 100, 0) - 100,
    indexFinger[1].y,
    25,
    15,
    100
  );
  for (let j = 1; j < 2; j++) {
    drawInterporatedEllipse(
      map(indexFinger[j].x, 0, 100, 100, 0) - 100,
      indexFinger[j].y,
      map(indexFinger[j + 1].x, 0, 100, 100, 0) - 100,
      indexFinger[j + 1].y,
      15 / j,
      15 / (j + 1),
      100
    );
  }
  drawInterporatedEllipse(
    map(indexFinger[2].x, 0, 100, 100, 0) - 100,
    indexFinger[2].y,
    map(indexFinger[3].x, 0, 100, 100, 0) - 100,
    indexFinger[3].y,
    15 / 2,
    15 / 5,
    100
  );
  pop();
  //body
  push();
  rotate((3.1 * PI) / 2);
  rotate(PI / 1.2);
  scale(0.6);
  drawInterporatedEllipse(
    map(0, 0, 100, 100, 0) - 100,
    0,
    indexFinger2[0].x - 3,
    indexFinger2[0].y + 5,
    25 / 0.6,
    30,
    100
  );
  drawInterporatedEllipse(
    indexFinger2[0].x - 3,
    indexFinger2[0].y + 5,
    indexFinger2[1].x - 3,
    indexFinger2[1].y + 5,
    30,
    20,
    100
  );
  //head
  drawInterporatedEllipse(
    indexFinger2[1].x - 3,
    indexFinger2[1].y + 5,
    indexFinger2[2].x,
    indexFinger2[2].y + 5,
    20,
    17,
    100
  );
  push();
  translate(7, 7);
  drawInterporatedEllipse(
    indexFinger2[1].x - 3,
    indexFinger2[1].y + 5,
    indexFinger2[2].x,
    indexFinger2[2].y + 5,
    20,
    10,
    100
  );
  pop();
  fill(255);
  ellipse(indexFinger2[1].x, indexFinger2[1].y + 5, 7, 7);
  pop();

  // foot
  push();
  translate(8, -8);
  rotate((3 * PI) / 2);
  rotate(PI / 1.3 + (3.8 * PI) / 2);
  drawInterporatedEllipse(
    map(0, 0, 100, 100, 0) - 100,
    0,
    map(indexFinger3[1].x, 0, 100, 100, 0) - 100,
    indexFinger3[1].y - 5,
    15,
    8,
    100
  );
  drawInterporatedEllipse(
    map(0, 0, 100, 100, 0) - 100,
    0,
    map(indexFinger4[1].x, 0, 100, 100, 0) - 100,
    indexFinger4[1].y - 5,
    15,
    8,
    100
  );
  drawInterporatedEllipse(
    map(indexFinger3[1].x, 0, 100, 100, 0) - 100,
    indexFinger3[1].y - 5,
    map(indexFinger3[2].x, 0, 100, 100, 0) - 100,
    indexFinger3[2].y - 5,
    8,
    15 / 3.5,
    100
  );
  drawInterporatedEllipse(
    map(indexFinger4[1].x, 0, 100, 100, 0) - 100,
    indexFinger4[1].y - 5,
    map(indexFinger4[2].x, 0, 100, 100, 0) - 100,
    indexFinger4[2].y - 5,
    8,
    15 / 3.5,
    100
  );
  push();
  translate(
    map(indexFinger4[2].x, 0, 100, 100, 0) - 100,
    indexFinger4[2].y - 5 - 2
  );
  translate(2.5, 0);
  rotate(
    atan2(
      indexFinger4[2].y - indexFinger4[1].y,
      map(indexFinger4[2].x, 0, 100, 100, 0) -
        map(indexFinger4[1].x, 0, 100, 100, 0)
    ) *
      1.7 -
      PI / 2.7
  );
  rect(0, 0, 12, 5, 4);
  pop();
  push();
  translate(
    map(indexFinger3[2].x, 0, 100, 100, 0) - 100,
    indexFinger3[2].y - 5 - 2
  );
  translate(2.5, 0);
  rotate(
    atan2(
      indexFinger3[2].y - indexFinger3[1].y,
      map(indexFinger3[2].x, 0, 100, 100, 0) -
        map(indexFinger3[1].x, 0, 100, 100, 0)
    ) *
      1.7 -
      PI / 1.5
  );
  rect(0, 0, 12, 5, 4);
  pop();
  pop();

  //hand
  push();
  translate(25, -5);
  rotate((1.5 * PI) / 2);
  scale(0.3);
  for (let j = 0; j < 2; j++) {
    drawInterporatedEllipse(
      indexFinger[j].x,
      indexFinger[j].y,
      indexFinger[j + 1].x,
      indexFinger[j + 1].y,
      20 / (j + 1),
      20 / (j + 2),
      100
    );
  }
  pop();
  i += step;
}

function drawInterporatedEllipse(x_0, y_0, x_1, y_1, r_0, r_1, num) {
  for (let t = 0; t < num; t++) {
    x = ((x_1 - x_0) / num) * t + x_0;
    y = ((y_1 - y_0) / num) * t + y_0;
    r = ((r_1 - r_0) / num) * t + r_0;
    ellipse(x, y, r, r);
  }
}
