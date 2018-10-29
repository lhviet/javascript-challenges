/**
 * Determine the exact time of the middle of a day
 * E.g., sunriseTime = 05:24, sunsetTime = 20:33, middleOfDay = 12:59
 * @param sunriseTime
 * @param sunsetTime
 */
function middleOfDay(sunriseTime, sunsetTime) {
    var sunrise = sunriseTime
        .split(':')
        .map(function (time) { return parseInt(time); });
    var sunriseAt = sunrise[0] + sunrise[1] / 60;
    var sunset = sunsetTime
        .split(':')
        .map(function (time) { return parseInt(time); });
    var sunsetAt = sunset[0] + sunset[1] / 60;
    var halfDayTime = sunriseAt + (sunsetAt - sunriseAt) / 2;
    var minute = Math.round(halfDayTime % 1 * 60);
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
    var pad = function (num, size) {
        var s = num.toString();
        while (s.length < size)
            s = '0' + s;
        return s;
    };
    return pad(Math.floor(halfDayTime), 2) + ':' + pad(minute, 2);
}
console.log(middleOfDay('05:24', '20:33'));
console.log(middleOfDay('05:24', '20:35'));
console.log(middleOfDay('05:24', '13:22'));
