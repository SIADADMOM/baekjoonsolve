const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const num = Number(input);
let answer = "";

for (let i = 0; i < num; i++) {
    for(let j = num - 1; j >= 0; j--) {
        answer += j <= i ?  '*' : ' ';
    }
    answer +=  "\n";
}

console.log(answer);