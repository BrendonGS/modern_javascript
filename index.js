var moment = require('moment');
var math = require('mathjs');
var tinycolor = require("tinycolor2");

console.log("Hello from Javascript");
var datetime = moment().startOf('day').fromNow();
console.log(datetime);

console.log(math.sqrt(-4));

var color = tinycolor("cyan");
console.log(color);

var message = "hi"
var message2 = "Mom"

console.log(`${message} ${message2}`);
console.log("ha ha ha ha");
