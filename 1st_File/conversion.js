let score = "255";
console.log(typeof score)

let value = Number(score)
console.log(typeof score)
console.log(typeof value)
console.log(value)

let height = "12abcd"

console.log(typeof height)

let newH = Number(height)
console.log(typeof height)
console.log(typeof newH)
console.log(newH)

//if height  = null
//then type = object & conversion into number equals to zero(0).

//if height  = undefined
//then type = undefined & conversion into number equals to NaN.

//if height  = boolean value -> true or false
//then type = boolean & conversion into number equals to 0 or 1.

//if height  = string like->"Birjesh"
//then type = string & conversion into number equals to NaN (i.e, Not a Number)

let isTrue = 1;
let booleanIsTrue = Boolean(isTrue)
console.log(isTrue)
console.log(booleanIsTrue)
console.log(typeof isTrue)
console.log(typeof booleanIsTrue)

/*note->conversion to boolean
1 => true
0 => false
" " => false
"any string" => true
*/

let someNumber = 20225024
let convertString = String(someNumber) //Note-> all conversion datatypes should start with capital Letter i.e String not string 
console.log(convertString)
console.log(typeof convertString)
