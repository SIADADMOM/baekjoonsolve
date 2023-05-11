const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let hours = Number(input[0]);
let minutes = Number(input[1]);

minutes -= 45;

if (minutes < 0) {
    minutes += 60;
    if (hours > 0) {
    hours -= 1;
    } else if (hours == 0) {
        hours += 23;
    }
    console.log(hours +' ' + minutes);
} else {
    console.log(hours + ' ' + minutes);
}
