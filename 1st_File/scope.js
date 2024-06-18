/*
{}  -> this is called scope , when used with function , conditional loops, etc. 
{} used in object declaration is not called a scope

NOTE :- If any let or const is defined inside the scope, then it's value can't be called outside of the scope, but this not 
happened with var */

let d = 15

if(true){
    const a = 10
    let b = 20
    var c = 30
}

// console.log(a)  //=>this give error , bcz the value of const and let can't be called out of scope
// console.log(b)   // =>this give error
//console.log(c)     // this print the value of c , thus it is recomended that we should not use var 

//Note :- d is defined as global scope , which can be accessed anywhere (inside or outside of scope) , i.e accessible throughout your code.

//Note :- but a ,b are defined as local scope, which can be accessed only inside the current scope


/******    important for interview    ********/

/*  The way the global scope is handled differs between environments like Node.js and browser (window) environments.

In Node.js, the global scope is not the same as the global object, although they are related. In a Node.js module, 
variables and functions are scoped to the module itself by default, not to the global scope. If you want to define a 
truly global variable, you need to explicitly attach it to the global object.

In a browser environment, the global scope is represented by the window object. Any variable or function defined 
in the global scope is automatically attached to the window object.

*/  



// when we define nested function, or nested loop , or any nested condition , then variable decalred in outer function, loop 
// can  be accessed by inner function, or loop, but inverse is not true.

function one(){
    const var1 = 123
    function two(){
        const var2 = "Birjesh"
        console.log(var1);
    }

    // console.log(var2)   // => this give error , bcz var2 is valid only inside function two

    two()
}

one()



// use of conditions

if(true){
    const val1 = "Birjesh"
    if(val1 === "Birjesh"){
        const val2 = 21
        console.log(`${val2} val1`)
    }
    //console.log(val2)  //  => this give error bcz the scope of val2 is only inside the inner if condition.
}

//console.log(val1)  // => this give error bcz the scope of val1 is only inside the outer if condition.




/*************  IMPORTANT CONCEPTS      ************/
//  1:-

console.log(myFun3(5))  // this can also call the function and print the result

function myFun3(num){
    return num*3
}

console.log(myFun3(2))  //this can also call the function and print the result


// 2:-

//console.log(sumVal(15))   // in below type defined functioin , function call should be present after the declaration of function

const sumVal =  function(num){   //  => in this , function value is stored inside the variable, this also called function and sometimes called expression
    return num+5
}

console.log(sumVal(15))