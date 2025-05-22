function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum +=i
    }
    return sum 
}


//Big-O Time complexity 
// n=4
// line 2 - execute only once (count = 1)
// for loop executes 4 times (4)
// return sum executes (1)


// toatal = 4+2 (n+2)

// time complexity is depended on the size 
// n=100  100+2
// n=1000 1000+2


// O(n)-Linear
// The linear time complexity is defined as the size of input increases time complexity also increases  


// Space comlexity 

// O(1)- constsnt 
// O(n)-linear
// O(logn)-logarathmic
