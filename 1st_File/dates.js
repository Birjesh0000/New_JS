const myDate = new Date();// Date is an object in javascript
console.log(typeof myDate)  //  => OBJECT.

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(myDate.toLocaleTimeString())
console.log(myDate.toString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.getTimezoneOffset())
console.log(myDate.getDate())

// myDate.toLocaleString('default', {
//     weekday: "narrow",   // press ctrl + space to get more properties
//     timeZone: 
// })

//ENTRING MY OWN DATA
let date = new Date(2023,10,10)
console.log(date.toDateString())

//mostly asked in interview
let time = Date.now();

console.log(time)  // this give time in milliseconds from 1/1/1973 till now.

console.log(Math.floor(time / 1000))  // this gives time in seconds from 1/1/1973 till now.
