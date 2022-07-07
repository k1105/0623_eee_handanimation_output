function drawShoulderToHeadAndJaw(shoulder_finger, head_finger, jaw_finger) {
  const origin = new Position(0, 0);
  let pos;
  let pos_prev;
  let finger;

  push();
  rotate(PI);
  rotate(-PI / 6);
  //shoulder
  finger = shoulder_finger;
  pos = rigmap(origin, finger[1], 93.3);
  drawInterporatedEllipse(origin, pos, hip_r, shoulder_r, 100);
  pos_prev = pos;
  pos = rigmap(pos_prev, finger[2], 132.9);
  drawInterporatedEllipse(pos_prev, pos, shoulder_r, head_r[0], 100);

  //head
  finger = head_finger;
  translate(pos.x, pos.y);
  rotate(PI / 6);
  pos = rigmap(origin, finger[1], 89);
  drawInterporatedEllipse(origin, pos, head_r[0], head_r[1], 100);
  //jaw
  finger = jaw_finger;
  rotate(PI / 3);
  pos = rigmap(origin, finger[1], 60.1);
  drawInterporatedEllipse(origin, pos, head_r[0], jaw_r[0], 100);
  pos_prev = pos;
  pos = rigmap(pos, finger[2], 35.8);
  drawInterporatedEllipse(pos_prev, pos, jaw_r[0], jaw_r[1], 100);
  pop();
}
