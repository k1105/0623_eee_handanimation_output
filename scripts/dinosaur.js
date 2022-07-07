const hip_r = 130;
const tail_r = [73.4, 42.7, 24.3, 12.7];
const leg_r = [27.9, 19.8, 23.6, 15.5];
const shoulder_r = 112.2;
const arm_r = [24.7, 10.2, 8.1, 14.1];
const head_r = [88.9, 43];
const jaw_r = [28.2, 18.7];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  fill(0);
}

function draw() {
  //data
  const tail_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const jaw_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const head_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const shoulder_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const leg_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const foot_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const arm_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];
  const hand_finger = [
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
    new Position(-5, 0),
  ];

  background(255);
  const origin = new Position(0, 0);
  let pos;
  let pos_prev;
  translate(width / 2, height / 2);

  //tail
  drawTail(tail_finger);

  //leg to foot
  drawLegToFoot(leg_finger, foot_finger);

  //shoulder to head and jaw
  drawShoulderToHeadAndJaw(shoulder_finger, head_finger, jaw_finger);

  push();
  rotate(PI);
  rotate(-PI / 6);
  pos = rigmap(origin, shoulder_finger[1], 93.3); // ここでのfingerはshoulderのfinger[1].
  translate(pos.x, pos.y);
  //cancel rotation
  rotate(-PI);
  rotate(PI / 6);
  //arm
  drawArmToHand(arm_finger, hand_finger);
  pop();
}

function rigmap(start, mot, d) {
  const len = Math.sqrt(mot.x ** 2 + mot.y ** 2);
  return new Position((d / len) * mot.x + start.x, (d / len) * mot.y + start.y);
}

function drawInterporatedEllipse(pos0, pos1, r0, r1, num) {
  for (let t = 0; t < num; t++) {
    x = ((pos1.x - pos0.x) / num) * t + pos0.x;
    y = ((pos1.y - pos0.y) / num) * t + pos0.y;
    r = ((r1 - r0) / num) * t + r0;
    ellipse(x, y, r);
  }
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
