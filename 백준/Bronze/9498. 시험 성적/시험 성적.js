const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const A = parseInt(input);

if ( A >= 90 ) {
    console.log("A");
} else if ( A >= 80 ) {
    console.log("B");
} else if ( A >= 70 ) {
    console.log("C");
} else if ( A >= 60 ) {
    console.log("D");
} else {
    console.log("F");
}
