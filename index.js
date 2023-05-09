function day(days) {
  let addDays = require("date-fns/addDays");
  let newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
}
// console.log(day(1));
module.exports = day;
