// WAP to calculate total marks in two subject and then calculate percentage.

function totalMarksAndPercentageCalculator(marksSubject1,marksSubject2){
    let totalMarks=marksSubject1+marksSubject2;
    let percentage=(totalMarks/(2*100))*100;
    return{
        totalMarks:totalMarks,
        percentage:percentage
    }
}

let inputMarksSubject1 = 90;
let inputMarksSubject2 = 90;
ans = totalMarksAndPercentageCalculator(inputMarksSubject1,inputMarksSubject2);
console.log("Marks of first subject = "+inputMarksSubject1+"/100");
console.log("Marks of second subject = "+inputMarksSubject2+"/100");
console.log("Total Marks = "+ans.totalMarks+"/200");
console.log("Percentage = "+ans.percentage+"%");