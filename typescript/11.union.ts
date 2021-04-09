function check(EID: number | string): void {
    if (typeof (EID) == "number") {
        let nextEID = EID + 1;
        console.log(`Next Employee ID will be:${nextEID}`)
    }
    else {
        console.log("Data Type is: " + typeof (EID));
        let nextEID = parseInt(EID.replace('E', '0')) + 1
        console.log(`Next Employee ID will be:  E${nextEID}`)
    }
}

var empID: number | string;
empID = 101;
check(empID)
empID = "E101";
check(empID)

// We use UNION if we want to restrict the data type of variable to two or more data types