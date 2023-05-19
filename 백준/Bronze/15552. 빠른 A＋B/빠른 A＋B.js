const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);
let answer = '';

for (let i = 1; i <= num; i++) {
    let data = input[i].split(' ');
    answer += Number(data[0]) + Number(data[1]) + "\n";
    
}

console.log(answer);