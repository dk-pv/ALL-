function sum(n){
    if (n<=0){
        return 0
    }else{
        return n+sum(n-1)
    }
}
console.log(sum(2));



function factorial(x){
    if(x === 1){
        return 1
    }else if(x < 0){
        return "it is negaative number"
    }else{
        return x * factorial(x-1)
    }
}
console.log(factorial(10));









