// Problem - Give a number 'n' find the nth element of fibinocii sequence 

// The first 2 num in the dequence are 0 ,1 (0,1,1,2,3,5,8..)

// recurssiveFibinocci(0)=0
// recurssiveFibinocci(1)=1

function recurssiveFibinocci(n){
    if(n<2){
        return n
    }
    return recurssiveFibinocci(n-1)+ recurssiveFibinocci(n-2)
}


console.log(recurssiveFibinocci(7))

// Big-O is not good for fibinocci 