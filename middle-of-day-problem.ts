/**
 * Determine the exact time of the middle of a day
 * E.g., sunriseTime = 05:24, sunsetTime = 20:33, middleOfDay = 12:59
 * @param sunriseTime
 * @param sunsetTime
 */
function middleOfDay(sunriseTime: string, sunsetTime: string) {
  const sunrise: Array<number> = sunriseTime
    .split(':')
    .map((time) => parseInt(time));
  const sunriseAt: number = sunrise[0] + sunrise[1] / 60;

  const sunset: Array<number> = sunsetTime
    .split(':')
    .map((time) => parseInt(time));
  const sunsetAt: number = sunset[0] + sunset[1] / 60;

  let halfDayTime: number = sunriseAt + (sunsetAt - sunriseAt)/2;
  let minute: number = Math.round(halfDayTime%1 * 60);

  if (minute === 60) {
    halfDayTime++;
    minute = 0;
  }

  /**
   * Utility function pad to add leading Zero '0' to a number
   * E.g., pad(5, 3) ==> 005
   * @param num
   * @param size
   */
  const pad = (num, size) => {
    let s: string = num.toString();
    while (s.length < size) s = '0' + s;
    return s;
  };

  return pad(Math.floor(halfDayTime), 2) + ':' + pad(minute, 2);
}

console.log(middleOfDay('05:24', '20:33'));
console.log(middleOfDay('05:24', '20:35'));
console.log(middleOfDay('05:24', '13:22'));