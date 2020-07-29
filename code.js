/*
    Intro to Arrays

    Complete the Following Exercises.
*/

/*
Exercise One - Accessing an array X

*/

let sentence = ["The", "dog", "jumped", "over", "the", "fence"];

// Step One ------------------
// Log the word "jumped" to the console by accessing it in the array.

// Your Code Here
console.log(sentence[2]);
// Step Two ------------------
// Log the last word in the array to the console.

// Your Code Here
console.log(sentence[5]);
/*
---------------------------------------------------------------------------
X Exercise Two - Adding up numbers

Create a statement which adds up every number of the array, assigning 
the sum to a new variable.

Then log the sum to the console. (Hint: It should be 28)
*/

let numbers = [3, 4, 5, 7, 9];

// Your Code Here
let sum = "3" + "4" + "5" + "7" + "9";
/*
---------------------------------------------------------------------------
X Exercise Three - Creating an array

*/

// Step One ------------------
// Create a new array and initialize with the names of five different colors.
// The array should be assigned to a variable named "colors"

// Your Code Here
let colors = ["red", "orange", "yellow", "green", "purple"];
console.log(colors.length);
// Step Two ------------------
// Log the length of the array to the console (it should print 5)
console.log(colors.length);
/*
---------------------------------------------------------------------------
X Exercise Four - Updating an array 

*/

let names = []; // Don't modify this line.

// Step One ------------------
// Add 5 names of people to the array.
// Then log your array to the console.

// Your Code Here
names[1] = "morgan";
names[2] = "brandon";
names[3] = "bre";
names[4] = "john";
names[5] = "sally";
console.log(names);
// Step Two ------------------
// Using the index variable, assign a new name to the given index.
// Then log the modified array to the console.
let index = 2;
// Your Code Here
names.push("hannah");
console.log(names);

/*
---------------------------------------------------------------------------
Exercise Five - Concatenating an array

Concatenate the second array to the first array.

You will need to assign the result to a new variable. 

Then log the new array to the console.   Hint: Use concat, this was shown in the reading.
*/

// Your Code Here.
let firstArray = ["This", "will", "make"];
let secondArray = ["a", "combined", "array."];
let combinedArray = firstArray.concat(secondArray);
