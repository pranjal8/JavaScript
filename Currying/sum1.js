function curry(f){
    return function(a){
        return function(b){
            return f(a,b)
        }
    }
}

function sum(a,b){
    return a+b
}

const  curriedSum = curry(sum)

console.log(curriedSum(1)(2)) //3
console.log(curriedSum)  
console.log(curriedSum())

