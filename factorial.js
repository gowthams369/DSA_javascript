function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(2))
console.log(factorial(3))

// Big-O - O(n)