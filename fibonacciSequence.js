function fibinocci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]

    }
    return fib
}

console.log(fibinocci(2))
console.log(fibinocci(5))

//  Big-O
//  loop -O(n)
//  nested loop-O(n^2)
//  input size reduced to half -O(logn)


// O(n) - This is bigO of the above program 