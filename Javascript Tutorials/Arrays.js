// Creating array
var myArray = ["John", 23];

// Finding value at index
var first = myArray[0];

// Modifying each individual index
myArray[0] = "Christian";

// Appending
myArray.push("Apple")

// Removing last index
var removed = myArray.pop();

// Removing first index
var removed = myArray.shift();

// Adding element to front
myArray.unshift("Apple")

// When array defined with const
const a = [1, 2, 3];
// You cant replace it
a = [4, 5, 6]
// But you can update elements
a[0] = 4