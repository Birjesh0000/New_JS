let num = 250
console.log(num)

let value = new Number(2500)
console.log(value);

console.log(value.toString());
console.log(value.toFixed(3));
console.log(value.toString().length);

const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros

const money = 123.858
console.log(money.toPrecision(4)) //precise till 4 starting digits
console.log(money.toPrecision(3))  // pricise till starting 3 digits


/*****************    MATHS     *****************/

console.log(Math)   // here math is an object
console.log(Math.abs(-25))
console.log(Math.round(5.235)) // this function round off the number to the nearest integer

console.log(Math.min(-2,2,54,9856,65))
console.log(Math.max(-2,2,54,9856,65))

console.log(Math.random())  //provide A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()*10)

console.log(Math.ceil(Math.random()*10));
console.log(Math.floor(Math.random()*10));

//but if we want the value greater than 1 than add on to the result.

console.log(Math.ceil(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min)  // this return the minimum value = min and max  = max
