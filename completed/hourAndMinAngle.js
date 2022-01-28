/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  let oneMinAngle = 6; 
  let oneHourAngle = 30;
  let minAngle = minutes * oneMinAngle;
  let hourAngle = ((hour % 12) + minutes / 60) * oneHourAngle;

  let diff = Math.abs(hourAngle - minAngle);
  return Math.min(diff, 360 - diff);
};

// old sol
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
