const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let time = input[0].split(' ');
let hourstominutes = parseInt(time[0]) * 60;
let minutes = parseInt(time[1]);
let ovenTime = parseInt(input[1]);
let total = hourstominutes + minutes + ovenTime;

let totalhours = Math.floor(total/60);
let totalminutes = total % 60;
if (totalhours >= 24) {
    totalhours -= 24;
}

console.log(totalhours, totalminutes);
