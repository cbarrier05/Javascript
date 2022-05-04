// Creating function
function myFunction() {
    console.log("This is a function");
}

// Call with
myFunction();

// Using arguements
function myFunction(a,b) {
    console.log(a + b);
}
myFunction(10, 5)

// Local variables are prioritised over global variables

// Returning value
function myFunction(a,b) {
    return a + b;
}
var value = myFunction(10, 5);

// How to set default values
function myFunction(a, b = 2)   // b now has a default value of 2 if nothing is entered

// Using rest function to allow multiple arguments
function myFunction(...args) {  // This will take any number of arguemetns and put them into an array called args
    return args.length;
}