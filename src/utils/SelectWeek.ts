const {
    startOfWeek,
    startOfDay,
    addDays,
} = require("date-fns");

export const SelectWeek = (start = new Date()) => {
    let date = startOfWeek(startOfDay(start)); // start day of week
  
    return function () {
      const week = [...Array(7)].map((_, i) => addDays(date, i)); // add to array days of week
      date = addDays(week[6], 1); //
      return week;
    };
}