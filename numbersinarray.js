function countnumbers(arr) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1;
        }
    }
    return count;

}

let result = countnumbers([2, -4, -17, 0, -1, 10, -8])
console.log(result)