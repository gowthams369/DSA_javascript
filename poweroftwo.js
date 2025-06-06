// Problem  -Give a positive integer 'n' determine if the number is a power of 2 or not 
// An integer is power of two if there exists a integer x such that 'n==2'


// n =8
// 8/2=4(reminder 0)
// 4/2=2(reminder0)
// 2/2=2(reminder0)
// if reminder is not any step 'n' is not power pf two 
// if reminder is 0 and 'n' down to 1 eventually ,n is a power of two 


function ispower(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true

}

console.log(ispower(1))
console.log(ispower(2))
console.log(ispower(8))
console.log(ispower(5))


// Result 
// Big-O - input redueced by half so

// Big-O= O(logn);