// Hwow to include "" in a string
var myString = "Here is my \"quote\" example";  // Treats \" as a character

/* Escape sequences
\' means to include ' as a character
\" means to include " as a character
\\ means to include \ as a character
\n means create a new line
\r means to do a carriage return
\t means to add a tab
\b means to add a backspace
\f means to add a form feed
*/

// Concatenatting strings, can also be done with += operator
myString = "Part1 "+ "Part 2";
// Can also do it with a variable that contains a string

// Finding Length of String
var length = myString.length;

// Find character at specific index
var firstLetter = myString[0];
var lastLetter = myString[myString.length - 1]

// String Immutability
// Cannot change each character individually
// myString[1] = "A" doesn't work
