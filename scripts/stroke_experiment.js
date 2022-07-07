function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  drawInterporatedEllipse(100, 100, 200, 200, 100, 20, 1000);
}

function draw() {}

function drawInterporatedEllipse(x_0, y_0, x_1, y_1, r_0, r_1, num) {
  for (let t = 0; t < num; t++) {
    x = ((x_1 - x_0) / num) * t + x_0;
    y = ((y_1 - y_0) / num) * t + y_0;
    r = ((r_1 - r_0) / num) * t + r_0;
    ellipse(x, y, r, r);
  }
}
