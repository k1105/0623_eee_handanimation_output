function drawLegToFoot(leg_finger, foot_finger) {
  const origin = new Position(0, 0);
  let pos;
  let pos_prev;

  push();
  //leg
  rotate((3 * PI) / 2);
  pos = rigmap(origin, leg_finger[1], 106.3);
  drawInterporatedEllipse(origin, pos, hip_r, leg_r[0], 100);
  pos_prev = pos;
  pos = rigmap(pos_prev, leg_finger[2], 51);
  drawInterporatedEllipse(pos_prev, pos, leg_r[0], leg_r[1], 100);
  //foot
  translate(pos.x, pos.y);
  pos_prev = pos;
  pos = rigmap(origin, foot_finger[1], 35.4);
  drawInterporatedEllipse(origin, pos, leg_r[1], leg_r[2], 100);
  pos_prev = pos;
  pos = rigmap(pos, foot_finger[2], 34.1);
  drawInterporatedEllipse(pos_prev, pos, leg_r[2], leg_r[3], 100);
  pop();
}
