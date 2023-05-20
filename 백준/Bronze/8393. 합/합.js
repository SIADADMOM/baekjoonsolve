const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const num = Number(input);
let sum = 0;   // 숫자열의 합이니까 sum을 0으로 맨 처음에 설정해주어야 나중에 오류가 안남 -> ''문자열시 123 같은 오류가 발생할 수 있음.

for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log(sum);




