const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = Array.from({ length: 30 }, (_, index) => index + 1);
const submittedNumbers = input.map(Number);  // input을 map메서드를 활용해서 숫자인 배열로 변환시켜줌

const submitted = new Set(submittedNumbers);

let missingNumber = null;
for (let i = 0; i < array.length; i++) {
  if (!submitted.has(array[i])) {     // Set 객체의 has 메서드를 사용해줌, submitted라는 객체에 array[i]가 존재하지 않는지를 확인하는 조건문, 만약 없다면, 그 array[i]를 missingNumber에 할당 
    missingNumber = array[i];
    break;
  }
}

console.log(missingNumber); // 가장 작은 출석번호 출력

let nextNumber = null;
for (let i = missingNumber + 1; i <= 30; i++) {   // 낮은 숫자볻 ㅏ
  if (!submitted.has(array[i])) {
    nextNumber = array[i];
    break;
  }
}

console.log(nextNumber); // 다음 출석번호 출력