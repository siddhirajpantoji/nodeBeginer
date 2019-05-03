function primeNumber(num){
    // This will return if the number is prime or not 
    for(  i = 0 ; i < num ; i++){
        if( i == 0 ||  i== 1 ){
            continue;
        }
        if( num % i ==0 ){
            break;
        }
    }
    if( i == 1 || i == 0 )
    {
        return false;
    } else if (i == num  ){
        return true;
    } else {
        return false;
    }
}
module.exports.isPrime = primeNumber;