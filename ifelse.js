function eligibletovote(age) {
    if (age < 1) {
        console.log("Invalid age")

    }
    else if (age < 18) {
        console.log("not eligible to vote")
    }
    else {
        console.log("Eligible to vote")
    }

}

eligibletovote(38)
eligibletovote(3)
eligibletovote(35)
eligibletovote(0)