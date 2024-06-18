function myFun(){
    console.log("B")
    console.log("y")
    console.log("e")
}

myFun()   ///// NOTE => myFun -> it is the reference of function myFun  &&   myFun()-> it is the execution of function myFun


// 1:-
function addNum(num1, num2){  // num1 and num2 are parameters
    console.log(num1 + num2)
}

//addNum() // it return NaN ,  because argument(values for num1 and num2) is not passed 

addNum(15, 56)  // 15 and 56 are arguments
addNum(2, "3")  // by default, js treat 2 as string and return 23
addNum(2, "a")
addNum(2, null)

let value = addNum(2, 3)
console.log(value)  // => print undefined , bcz addNum function does not contain any return statement



// 2:-
function addNum1(num1, num2){  // num1 and num2 are parameters
    // let val = num1 + num2
    // return val
    //or
    return num1 + num2
}

let sum = addNum1(12, 88)
console.log(sum)    /// ==> this is right method to print the sum value using functioin


///  3:-
function user(username){

    if(username === undefined){   // this condition is equivalent to (!username)
        console.log("please enter the name")
        return
    }

    // return `${username} just logged in`    //  =>both give same answer
    return username + " just sign in"
}

console.log(user("Birjesh"))
console.log(user())   // since no argument is passed => it return undefined




/******************     IF THE NUMBER OF INPUTS/ARGUMENTS ARE VARIABLE (LIKE IN GIFT CARDS) */


//  1:-
function getcardPrice(...num){   // this is rest operator(here we don't call it spread operator) , which return all entries in an array
    return num
}

console.log(getcardPrice(12,23,34,45,56))


//  2:-
function sumCardPrice(val1, val2, ...num){  // in this case val1 and val2 is not returned , thus value corresponding to
    return num                               //val1 and val2 => 14, 25 will not get returned
}

console.log(sumCardPrice(14,25,36,47,58,69))




/***************    PASSING OBJECT AS AN ARGUMENT IN THE FUNCTION     **********/

const myObj = {
    age : 21,
    place : "sonauli"
}

function userdetail(any_object){
    console.log(`user age is ${any_object.age} and belongs to ${any_object.place}`)
}

userdetail(myObj) // in this case , we pass previously defined object as argument


userdetail({ // in this method , object is created and passed as argument directly
    age : 23,
    place : "Nautanwa"
})





/***************    PASSING Arrays AS AN ARGUMENT IN THE FUNCTION     **********/

const newArr = [1,2,3,4,5,6,7,89]

function getArrElements(any_array){
    return any_array[5]
}

console.log(getArrElements(newArr));  // method-1

console.log(getArrElements([11,2,45,78,64,65]))   //method-2