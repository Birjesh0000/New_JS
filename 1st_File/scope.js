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