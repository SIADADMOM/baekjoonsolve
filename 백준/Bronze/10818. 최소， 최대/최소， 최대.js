const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = input[0];
const numbers = input[1].split(' ');

numbers.sort(function(comp1, comp2) {   // sort() 메서드의 옵션인 compareFunction 사용으로 comp1 comp2값의 비교에 따라 뒤에 정렬될 방식을 지정해줌. 
    return comp1 - comp2;
});

console.log(numbers[0]);
console.log(numbers[`${N - 1}`]);
