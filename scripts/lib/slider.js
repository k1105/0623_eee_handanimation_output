class Slider {
  constructor(unit_length) {
    this.rollover = false; // Is the mouse over the ellipse?
    this.dragging_rightside = false;
    this.dragging_leftside = false;
    this.x = 700; //position of slider
    this.y = 800; //position of slider
    this.unit_length = unit_length;
    this.start_at = 0;
    this.end_at = unit_length;
    this.region_width = 300;
    this.region_height = 50;
    this.handle_width = 13;
    this.offsetX = 0;
    this.inner_start = (this.start_at / this.unit_length) * this.region_width;
    this.inner_end = (this.end_at / this.unit_length) * this.region_width;
  }

  over() {
    // Is mouse over object
    const handle_inside_start = this.x + this.inner_start;
    const handle_inside_end = this.x + this.inner_end;
    if (
      ((mouseX > handle_inside_start - this.handle_width &&
        mouseX < handle_inside_start) ||
        (mouseX > handle_inside_end &&
          mouseX < handle_inside_end + this.handle_width)) &&
      mouseY > this.y &&
      mouseY < this.y + this.region_height
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  setStartAt(start_at) {
    this.start_at = start_at;
    this.inner_start = (this.start_at / this.unit_length) * this.region_width;
  }

  setEndAt(end_at) {
    this.end_at = end_at;
    this.inner_end = (this.end_at / this.unit_length) * this.region_width;
  }

  showSlider() {
    const region_width = this.region_width;
    const region_height = this.region_height;
    const handle_width = this.handle_width;
    const inner_start = this.inner_start;
    const inner_end = this.inner_end;
    push();
    fill(200);
    translate(this.x, this.y);
    rect(0, 0, region_width, region_height, 5, 5, 5, 5);

    if (this.rollover) {
      fill(240, 190, 0);
    } else {
      fill(250, 200, 0);
    }
    rect(
      inner_start - handle_width,
      0,
      inner_end - inner_start + handle_width * 2,
      region_height,
      5,
      5,
      5,
      5
    );
    fill(255);
    rect(
      inner_start,
      3,
      inner_end - inner_start,
      region_height - 6,
      3,
      3,
      3,
      3
    );
    stroke(100);
    strokeWeight(1);
    line(inner_start - 5, 15, inner_start - 5, region_height - 15);
    line(inner_start - 8, 15, inner_start - 8, region_height - 15);
    line(inner_end + 5, 15, inner_end + 5, region_height - 15);
    line(inner_end + 8, 15, inner_end + 8, region_height - 15);
    pop();
  }

  showTimeBar(t) {
    const region_width = this.region_width;
    const region_height = this.region_height;
    push();
    noFill();
    strokeWeight(1);
    translate(this.x, this.y);
    stroke(255, 0, 0);
    console.log();
    line(
      (region_width * t) / this.unit_length,
      4,
      (region_width * t) / this.unit_length,
      region_height - 4
    );
    pop();
  }

  pressed() {
    // Did I click on the rectangle?
    const handle_inside_start = this.x + this.inner_start;
    const handle_inside_end = this.x + this.inner_end;
    if (mouseY > this.y && mouseY < this.y + this.region_height) {
      if (
        mouseX > handle_inside_start - this.handle_width &&
        mouseX < handle_inside_start
      ) {
        //dragging leftside
        this.dragging_leftside = true;
        this.offsetX = this.inner_start - mouseX + this.x;
      } else if (
        mouseX > handle_inside_end &&
        mouseX < handle_inside_end + this.handle_width
      ) {
        //dragging rightside
        this.dragging_rightside = true;
        this.offsetX = this.inner_end - mouseX + this.x;
      }
    }
  }

  update() {
    if (this.dragging_rightside) {
      this.inner_end = mouseX - this.x + this.offsetX;
      if (this.inner_end < this.inner_start) {
        this.inner_end = this.inner_start + 1;
      }
      if (this.inner_end > this.region_width) {
        this.inner_end = this.region_width - 1;
      }
      this.end_at = floor(
        (this.inner_end * this.unit_length) / this.region_width
      );
    } else if (this.dragging_leftside) {
      this.inner_start = mouseX - this.x + this.offsetX;
      if (this.inner_start < 0) {
        this.inner_start = 0;
      }
      this.start_at = floor(
        (this.inner_start * this.unit_length) / this.region_width
      );
    }
  }

  released() {
    this.dragging_rightside = false;
    this.dragging_leftside = false;
  }
}
