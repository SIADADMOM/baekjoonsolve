const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);
const v = Number(input[2]);
const N = input[1].trim().split(' ');

let count = 0;
for (let i = 0; i <= num; i++) {
    if(N[i] == v) {
        count++;
    }
}

console.log(count);