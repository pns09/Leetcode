const calculateAngle = (h, m) => {
  if (h < 0 || m < 0 || h > 12 || m > 60) return -1;

  if (h == 12) h = 0;

  if (m == 60) m = 0;

  let hour_angle = 0.5 * (h * 60 + m);

  let minute_angle = 6 * m;

  let angle = Math.abs(hour_angle - minute_angle);

  return Math.min(360 - angle, angle);
};

console.log(calculateAngle(12, 6));
