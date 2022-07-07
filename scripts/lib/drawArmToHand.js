function drawArmToHand(arm_finger, hand_finger) {
  const origin = new Position(0, 0);
  let pos;
  let pos_prev;
  let finger;

  //arm
  finger = arm_finger;
  translate(30.6, 41);
  rotate(PI);
  pos = rigmap(origin, finger[1], 22.1);
  drawInterporatedEllipse(origin, pos, arm_r[0], arm_r[1], 50);
  pos_prev = pos;
  pos = rigmap(pos_prev, finger[2], 25);
  drawInterporatedEllipse(pos_prev, pos, arm_r[1], arm_r[2], 30);
  //handtip
  finger = hand_finger;
  pos_prev = pos;
  pos = rigmap(pos_prev, finger[1], 16.4);
  drawInterporatedEllipse(pos_prev, pos, arm_r[2], arm_r[3], 100);
}
