// Creating if statement
if (isItTrue) {
    // If it is true enters here
}

/* Comparison operators
==  checks if equal to, even if different data types, e.g. 3 == "3" is true
===  Strict check, only if they are same data type, e.g. 3 === "3" is false
!=  checks if not equal to, even if different data types, e.g. 3 != "3" is false
!==  Strict check, takes data type into account, e.g. 3 !== "3" is true as different types
>
<
>=
<=
*/

// Using and, or operators
if (value <= 50 && value >= 25){    // && means and
                                    // || means or
}

// If Else statement

if (isTrue) {
    // Runs when true
} else {
    // Runs when false
}

// Else if
if (value > 10) {

} else if (value > 5) {

} else{

}

// Switch statements, used when there are many different outcomes depending on value
switch (value) {
    case 1:
        answer = 1;
        break;      // break means that once the condition id run it leaves the switch
    case 2:
        answer = 2;
        break;
    case 3:
        answer = 3;
        break;
    default:        // If previous statements aren't met, does the default statement
        answer = 0;
        break;
}

// This can be simplified
if (a < b) {
    return true;
} else {
    return false;
}
// To this
return a < b;


// This can be simplifed
if (a < b) {
    return a + 5;
} else {
    return a + 5;
}
// To this
return a < b ? a+5 : b+5;
// This is a Ternary Operator   It can be nested with itself