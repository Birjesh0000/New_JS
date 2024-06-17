const arr = [1,2,3,4,56,7,8,9]
console.log(arr[0])

arr.push(15)  //similarly pop operatoin works
console.log(arr)

arr.shift() //this shift the array elements from right to left and remove 1st element
arr.unshift(123)  // this shift the array elements from left to right , insert 123 at 0th index and not remove last element , just shift it
console.log(arr)
 

console.log(arr.includes(13))  // this return true if 13 present in arr otherwise false
console.log(arr.includes(123)) 
console.log(arr.indexOf(10))   //this return -1 if element is not present in arr otherwise return the index od that element(10)
console.log(arr.indexOf(56))

const val = arr.join();  //this convert the arr into string

console.log(arr)
console.log(val)
console.log(typeof val)


/**  SLICE AND SPLICE =>  ASKED IN INTERVIES    */

// SLICE DON NOT MANIPULATES THE ORIGINAL ARRAY BUT SPLICE MANIPULATES THE ORIGINAL ARRAY
//slice(i, j) COPY THE ELEMENT FROM ith index to (j-1)th index from original array
//slice(i, j) COPY THE ELEMENT FROM ith index to (j)th index from original arrya and remove these copied elements from the original array

console.log("A ", arr);

const arr1 = arr.slice(1, 4); //use of slice

console.log("B ", arr);
console.log("C ", arr1);


const arr2 = arr.splice(1, 4);  //use of splice => remove the element from 

console.log("D ", arr);
console.log("E ", arr2);


// NEW METHODS ON ARRAYS
const val1 = [1,2,3,4,5]
const val2 = [5,6,8,9,1]
const val6 = val2.push(val1)   // this method insert array inside another array , not only the elements of other array
                    // thus val1 array act as single element for val2 array.
console.log(val2)


const val3 = [1,2,3,4,5]
const val4 = [5,6,8,9,1]

const val5 = val3.concat(val4);  // concat inset only the elements from one array to target array
console.log(val5)


/*****   use of spread function on array to merge two arrays */

const val7 = [... val3, ... val4]
console.log(val7)

/*****   use of flat function on array ***/

const arr4 = [1,2,5,[2,3,5,[12,1,2],1,2],12,45,[987,2,5],16,6]
const arr5 = arr4.flat(Infinity) //=> this function is used to spread all elements of nested arrays in infinity depth into single array.

console.log(arr5)

console.log(Array.isArray("Birjesh")) // check if given input is array or not
console.log(Array.from("Birjesh"))      // this convert given input into array
console.log(Array.from({name: "birjesh"})) // specify the part (key or value) which we want to convert in array otherwise empty array will get obtain

const aa = 5
const bb = 10
const cc = 15

console.log(Array.of(aa, bb, cc))  // of is used to make arrays of entries = aa, bb, cc

