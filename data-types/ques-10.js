// Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

function simpleInterestCalculator(amount, rate, time){
    let simpleInterest = (amount*rate*time)/100;
    return simpleInterest;
}

let inputAmount = prompt("Enter the Principal Amount :  ");
let inputRate = prompt("Enter Interest Rate(%) : ");
let inputTime = prompt("Enter the Time(Years) : ");
let ans = simpleInterestCalculator(inputAmount,inputRate,inputTime);
alert(`Simple Interest = ${ans}`);