function addition(a, b, xyz ){
    console.log(xyz); // 5 
    return xyz(a+b);
}
var result=function(x){
    console.log(x); // 
    return x;
}
var c = addition(2,3,function(y){
    console.log(y); // 
    //return y;
});
//console.log(result(c));
console.log(c);