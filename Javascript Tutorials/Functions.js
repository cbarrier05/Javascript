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