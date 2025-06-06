function largestnumber(arr) {
    let largest=-Infinity;
    for (i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest=arr[i]
        }
    }
    return largest;


}

let arr = [5, 0, 4, 1,3]
let result = largestnumber(arr)
console.log(result);