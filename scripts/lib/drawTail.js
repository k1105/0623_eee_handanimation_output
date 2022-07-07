function drawTail(finger) {
  const origin = new Position(0, 0);
  let pos;
  let pos_prev;

  pos = rigmap(origin, finger[0], 97.6);
  drawInterporatedEllipse(origin, pos, hip_r, tail_r[0], 100);
  pos_prev = pos;
  pos = rigmap(pos_prev, finger[1], 92);
  drawInterporatedEllipse(pos_prev, pos, tail_r[0], tail_r[1], 100);
  pos_prev = pos;
  pos = rigmap(pos_prev, finger[2], 67);
  drawInterporatedEllipse(pos_prev, pos, tail_r[1], tail_r[2], 100);
  pos_prev = pos;
  pos = rigmap(pos_prev, finger[3], 51.3);
  drawInterporatedEllipse(pos_prev, pos, tail_r[2], tail_r[3], 100);
}
