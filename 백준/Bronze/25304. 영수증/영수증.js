const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const total = Number(input[0]);
const numberOfThings = Number(input[1]);
let sum = 0;


for (let i = 2; i <= input.length - 1 ; i++) {
    let priceAndNumber = input[i].split(' ');
    sum += Number(priceAndNumber[0]) * Number(priceAndNumber[1]);
}

if ( total == sum ) {
    console.log('Yes');
} else {
    console.log('No');
}

 

