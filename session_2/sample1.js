let x = "abc";

const name = "Siddhiraj"
console.log(x)
function abc(){
    x= "zyx"
    var x= "pqr"
    console.log("Inside ABC ")
    //console.log(y);
    let y = "asdasd";
    console.log(y);
    function xyz (){
        let y ="murkha"
        console.log(y);
        console.log("Inside XYZ ")
        console.log(x);
    }
    xyz();
}
abc();
console.log(x);