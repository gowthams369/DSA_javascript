function smallest(arr) {
    let smallest = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [5, 6, 2, 1, 3]
let result = smallest(arr)
console.log(result)