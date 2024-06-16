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


/* **************** OPERATIONS ON DATA AND DATATYPES ************************* */
let num = 20225024
let negVal = -num // or ~num
console.log(negVal)

let str1 = "Birjesh"
let str2 = " Gupta"
let str3 = str1 + str2
console.log(str3)

/// SOME INTERESTING concepts of OPERATIONS
console.log("2"+1+1)  //=> 211
console.log("12"+12)  //=> 1212 
console.log(2+1+1)    //=> 4
console.log(12+12+"12") //=> 2412 

//SOME OTHER CONCEPTS
// ==(equality operator) works differently as compared to comparision operator

console.log("2" > 1)
console.log("2" == 1)
console.log("2" >= 1)

console.log(null > 0)
console.log(null == 0)
console.log(null <= 0)



/**********************************IMPORTANT DATATYPES */

/*
1:- PRIMITIVE DATATYPE =>   copy of original data is passed and all changes are made on that copy only, 
the actual data don't altered

String, Number, Boolean, null, undefined, Symbol, BigInt

2:- NON-PRIMITIVE DATATYPE (REFRENCE DATATYPE) => refrence of onriginal data location is given/shared , thus any 
changes made occur in original data.

Arrays, Objects, functions

NOTE:- JavaScript is a dynamically typed language, which means that data types of variables are determined
 by the value they hold at runtime and can change throughout the program as we assign different values to them.

 NOTE:- The return datatype i.e, (console.log(typeof ...)) of all the nonpremitive datatype are object.
 */

 const id = Symbol('123456')
 const newId = Symbol('123456')

 console.log("Birjesh Gupta")

 console.log(id)
 console.log(newId)
 console.log(id == newId) //false
 console.log(id === newId) // flase => because symbol guaranteed to be unique and  It represents a unique identifier.

 const array = [1,2,3,4,6]
 const arr = ["birjesh", "gupta"]

 let myObject = { // all inside the curly braces are include as the part of object and the datatypes in object can be number, string, function, array, etc.
    name: "Birjesh",
    Age: 26,
 }

 const myFunction = function(){
        console.log("hello")
 }

 console.log("Birjesh")

 console.log(typeof myObject)
 console.log(typeof myFunction)
 console.log(typeof array)
 console.log(typeof id)