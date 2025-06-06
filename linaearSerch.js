// Given an array of n numbers elements and target t find the index of t in the array Return minus 1 if the target not found 

// arr = [-5,2,10,4,6],t=10 >should return 2

function linearSerch(arr,target){
    for(let i=0;i<arr.length;i++){
       if( arr[i]==target){
        return i
       }
    }
return -1
}
console.log(linearSerch([5,8,9,3],9))

// Big-O = O(n)