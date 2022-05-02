// Creating an object
var myObject = {
    "name": "John", // "name" is the property
    "age": 14,
    "school year": 10
};

// Accessing a property of object with a dot operator
var name = myObject.name;   // Sets name varible to the element in the name property
// Or do this with brackets, required if property name has a space in it
var school_name = myObject["school year"];

// Can also find elemetn using a variable as the property
var property = "name";
var student_name = myObject[property];  // Sets student_name to the contents of the "name" property

// Changing properties, can be done with brackets instead
myObject.name = "James";

// Adding new properties, can be done with a dot instead
myObject["subject"] = "Maths"; // As subject doesn't already exist, creates new property for it

// Removing property from object
delete myObject.subject; // Removes subject property

// Using an object for lookups instead of a switch
var lookup = {
    "a": 1,
    "b": 2,
    "c": 3
};
value = lookup["a"]

// How to check if object has a certain property
return myObject.hasOwnProperty("name")  // Returns true if myObject has a property called name

// Can contain any data types including arrays

// You can have multiple objects within an array, or nest objects within each other
//if car property is nested within garage property( as an object) of myObject, to access car object type
myObject.garage.car;
// If object1 and object2 are 2 objects with in an array called objectArray, to access object1 type
objectArray[0]