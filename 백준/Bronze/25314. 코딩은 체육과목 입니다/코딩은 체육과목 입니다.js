const fs = require('fs');
const num = Number(fs.readFileSync('/dev/stdin').toString()) / 4;
let long = "";

for (i = 1; i <= num; i++) {
    long += "long ";
}

console.log(long + "int");
 