// Problem : Given sorted array pf n elements and a target elemnt t find the index of 't' in the array 
// Return -1 if target not found 

function binary(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex - rightIndex) / 2)
        if (target == arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
}

console.log(binary([5, 3, 4, 6, 10], 10)) 