function recurssiveFactorial(n) {
    if (n == 0) {
        return 1
    }
    return n * recurssiveFactorial(n - 1)

}

console.log(recurssiveFactorial(4))
console.log(recurssiveFactorial(5))





// Factorail of non-negtaive integer 'n' is the product of all integer less than or equal to 'm'

// 5! = 5*4*3*2*1  5*4!
// 4! = 4*3*2*1    4*3!

// n! =n*(n-1)!


// Big-O = O(n)