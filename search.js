function search(arr, target) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }

    return -1;

}

let arr = [4, 2, 0, 10, 8, 20];
let result = search(arr, 20);
console.log(result);