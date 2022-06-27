class HandAnimation {
  constructor(data, step) {
    this.data = data;
    this.step = step;
    this.length = data.length;
  }

  interpolatedPosition(t, arr, base = null) {
    t = (t + this.length) % this.length;
    const current = Math.floor(t);
    const next = (current + 1) % this.length;
    const delta = t - current;

    if (base) {
      return {
        x: arr[current].x * (1 - delta) + arr[next].x * delta - base.x,
        y: arr[current].y * (1 - delta) + arr[next].y * delta - base.y,
      };
    } else {
      return {
        x: arr[current].x * (1 - delta) + arr[next].x * delta,
        y: arr[current].y * (1 - delta) + arr[next].y * delta,
      };
    }
  }

  smooth(t, arr, base = null) {
    //平滑化処理
    let p_0 = this.interpolatedPosition(arr, t);
    let p_1 = this.interpolatedPosition(arr, t + this.step);
    let p_2 = this.interpolatedPosition(arr, t + this.step * 2);
    let p_min1 = this.interpolatedPosition(arr, t - this.step);
    let p_min2 = this.interpolatedPosition(arr, t - this.step * 2);

    return {
      x:
        (p_min2.x * 1) / 16 +
        (p_min1.x * 3) / 16 +
        (p_0.x * 8) / 16 +
        (p_1.x * 3) / 16 +
        (p_2.x * 1) / 16,
      y:
        (p_min2.y * 1) / 16 +
        (p_min1.y * 3) / 16 +
        (p_0.y * 8) / 16 +
        (p_1.y * 3) / 16 +
        (p_2.y * 1) / 16,
    };
  }

  smoothIndexFinger(t, base = null) {
    return [
      this.smooth(t, this.data.indexFinger[0], base),
      this.smooth(t, this.data.indexFinger[1], base),
      this.smooth(t, this.data.indexFinger[2], base),
      this.smooth(t, this.data.indexFinger[3], base),
    ];
  }
  thumb(t, base = null) {
    return [
      this.interpolatedPosition(t, this.data.thumb[0], base),
      this.interpolatedPosition(t, this.data.thumb[1], base),
      this.interpolatedPosition(t, this.data.thumb[2], base),
      this.interpolatedPosition(t, this.data.thumb[3], base),
    ];
  }
  indexFinger(t, base = null) {
    return [
      this.interpolatedPosition(t, this.data.indexFinger[0], base),
      this.interpolatedPosition(t, this.data.indexFinger[1], base),
      this.interpolatedPosition(t, this.data.indexFinger[2], base),
      this.interpolatedPosition(t, this.data.indexFinger[3], base),
    ];
  }
  middleFinger(t, base = null) {
    return [
      this.interpolatedPosition(t, this.data.middleFinger[0], base),
      this.interpolatedPosition(t, this.data.middleFinger[1], base),
      this.interpolatedPosition(t, this.data.middleFinger[2], base),
      this.interpolatedPosition(t, this.data.middleFinger[3], base),
    ];
  }
  ringFinger(t, base = null) {
    return [
      this.interpolatedPosition(t, this.data.ringFinger[0], base),
      this.interpolatedPosition(t, this.data.ringFinger[1], base),
      this.interpolatedPosition(t, this.data.ringFinger[2], base),
      this.interpolatedPosition(t, this.data.ringFinger[3], base),
    ];
  }
  pinky(t, base = null) {
    return [
      this.interpolatedPosition(t, this.data.pinky[0], base),
      this.interpolatedPosition(t, this.data.pinky[1], base),
      this.interpolatedPosition(t, this.data.pinky[2], base),
      this.interpolatedPosition(t, this.data.pinky[3], base),
    ];
  }
  palm(t) {
    return [this.interpolatedPosition(t, this.data.palmBase[0])];
  }
}
