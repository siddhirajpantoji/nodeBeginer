// truthly falsy values are those which return either true or false 
var y = 5.0;
var x = "5";
if( x == y ){
    console.log("True ")
}
else{
    console.log("False");
}
// Falsy Values Start 
var value = 0;
var value = undefined;
var value = false;
var value = null;
var value = "";
// Falsy Values End
var value = {};
var value = -5;

if( value ){
    console.log("True ")
}
else{
    console.log("false");
}