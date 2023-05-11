const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((x,y)=> x-y);

const one = input[0];
const two = input[1];
const three = input[2];

if ( one == two && two == three ) {
    console.log(10000 + three * 1000 );
} else if ( one == two || two == three ) {
    console.log(1000 + two * 100 );
} else {
    console.log(three * 100);
}