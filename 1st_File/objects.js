/*OBJECTS IN JS CAN BE DECLARED IN TWO WAYS 
1 => BY THE USE OF LITERAL  => const myObject = { }  =>it contains key and value pairs
2 => BY THE USE OF CONSTRUCTOR  => object.create

NOTE :- WHEN CONSTRUCTOR IS USED TO FORM AN OBJECT , THEN IT IS CALLED SINGLETON OBJECT
BUT IF WE USE LITERAL METHOD , THEN MULTIPLE INSTANCE OF THAT OBJECT GET FORMED.

BOTH ABOVE METHODS OF DECLARATION OF OBJECT ARE NOT VARY IN PERFORMANCE , THEY JUST VARY IN VIEW OF SINGLETON

*/

/**************            OBJECT LITERALS             ************/

//      NOTE => keys of objects in JavaScript are always strings. 
//              This is because JavaScript objects are implemented as hash tables, which require string keys.

const mySymbol = Symbol("key1")  // decleration of symbol
console.log(typeof mySymbol)

const myObject = {   
    name : "birjesh gupta",
    age : 21,
    location : "Sonauli",
    email : "gbirjesh.com",
    //mySymbol : "Hello",  // don't declare symbol as key in object like this
    [mySymbol] : "Hello",   // this is correct method
    "years" : 2024,          // this is also a valid method to write the key of object
    money : [1,2,3,4,6]
}

console.log(myObject.name)
console.log(myObject["age"])   /// another method to access the value of object for any specific key
console.log(myObject[mySymbol])
console.log(typeof mySymbol)

//console.log(myObject.years)  // this is not a right method
console.log(myObject["years"])



myObject.age = 20;   //to change the value of age key

// TO FREEZE THE VALUE-KEY PAIR OF ANY OBJECT, now value for any key won't be change
Object.freeze(myObject);
myObject.age = 22;

console.log(myObject)


/******************    FUNCTION DEFINED INSIDE OBJECT   *********/

const obj = {
    can :"Birjesh Gupta",
}



obj.myFun = function(){
    console.log("Hello , I am here!")
}

console.log(obj.myFun) // in this case function will not execute , only reference of function get returned
console.log(obj.myFun())

obj.myFun2 = function(){
    console.log(`Hello , I am here!, ${this.can}`)
}

console.log(obj.myFun2())



/***********************    define object inside another object and so on....    *********/
const obj2 = {
    email : "fkdvattherategmail.com",
    fullName : { //object inside object
        userFullName : {  // object inside another object
            firstName : "birjeh",
            seconsName : "gupta",
        }
    }
}

console.log(obj2.fullName)
console.log(obj2.fullName.userFullName)
console.log(obj2.fullName.userFullName.firstName)

const obj3 = {age : 26, sex : "male", pincode : 273164}
const obj4 = {age : 21, sex : "male", pincode : 273308}

const obj5 = {obj3, obj4} // this make the two objects -> obj3 and obj4 as the elements of obj5 as occurs in array

console.log(obj5)

const obj7 = {age1 : 20, sex1 : "male", pincode1 : 273308}
const obj8 = {age2 : 26, sex2 : "male", pincode2 : 273164}
const obj9 = {age3 : 21, sex3 : "male", pincode3 : 273308}

const obj6 = Object.assign({}, obj7, obj8, obj9)  // this method merge all the values of objects to the 
                                                  //first object in the assign functioin , and there is no need to provide
                                                  // empty object->{}, the purpose is only that all values from other objects
                                                  // get merged to the empty object.
console.log(obj6)   //the above method to assign the objects does not alter the entries of other objects , 
                    // but alter the value of very first object provided to assign function.
console.log(obj7)

console.log("        ")
console.log("         ")
console.log("         ")
console.log("         ")   //for creating spaces between obj7 and obj11


// SIMILAR OPERATIONS CAN BE DONE IN USING SPREAD OPERATOR

const obj11 = {...obj7, ...obj8, ...obj9}
console.log(obj11)


///   WHEN values COMES FROM DATABASE => then array of objects are present

// const arr = [{}, {}, {}, {}]

const arr = [
    {
        age : 21,
        sex : "male",
    },

    {
        age : 20,
        sex : "female"
    },

    {

    }
]

console.log(arr[1].age)   // this is the method to obtain the value of any key in any object inside the array












/********************                USE OF CONSTRUCTOR TO DEFINE OBJECT (singleton object)          ******************/



const ourObj = new Object()

console.log(ourObj)

ourObj.age = 21
ourObj.sex = "male"
ourObj.price = 2100

console.log(ourObj)

console.log(Object.keys(ourObj))  // => ******* THIS GIVES THE ARRAY OF ALL THE KEYS OF 'ourObj' OBJECT AND WE CAN 
                                    //   USE IT TO FETCH ALL THE KEYS FROM THE ARRAY , USING LOOPING

console.log(Object.values(ourObj))   // as like object.keys, the properties and operations are same for object.values

console.log(Object.entries(ourObj))  // this method return the all key value pair of 'ourObj' object

console.log(ourObj.hasOwnProperty("age"))  // this return true if age is the key of given object ,otherwise false
console.log(ourObj.hasOwnProperty('course'))



