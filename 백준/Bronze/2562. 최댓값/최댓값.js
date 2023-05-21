const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.map(Number);   // map 메서드로 숫자로 정렬해줌
let max = Math.max(...arr);   // Math.max로 배열을 숫자 순서대로 정리해줌 
let maxNum;

for (let i = 0; i < arr.length; i++ ) {
    if (max === arr[i]) {
        maxNum = i + 1;
    }
}


console.log(max);
console.log(maxNum);
