const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const firstLine = input[0].split(' ');
const secondLine = input[1].split(' ');
const N = Number(firstLine[0]);
const X = Number(firstLine[1]);


let result = secondLine.filter((value) => value < X)
let answer = "";

for (let i = 0; i < result.length; i++) {
        answer += result[i];
        
        // 마지막 요소가 아닌 경우에만 공백을 추가함
        if (i < result.length - 1) {
            answer += " ";
        }
}

console.log(answer);

// filter 메서드로 배열은 잘 구했으나, 정답에서 원하는 값이 1 4 2 3 이므로, 배열을 for문으로 인해 출력하는 기능을 넣어줌.