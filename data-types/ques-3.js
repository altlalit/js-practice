// WAP to input two numbers and perform arithmetic operations on those numbers.

function arithmeticOperations(number1,number2){
    let add = number1 + number2;
    let sub = number1 - number2;
    let mul = number1 * number2;
    let div = number1 / number2;

    return {
        add:add,
        sub:sub,
        mul:mul,
        div:div
    }
}

let inputNumber1 = 7;
let inputNumber2 = 3;
ans = arithmeticOperations(inputNumber1,inputNumber2);

console.log(inputNumber1 + " + "+inputNumber2+" = "+ans.add);
console.log(inputNumber1 + " - "+inputNumber2+" = "+ans.sub);
console.log(inputNumber1 + " x "+inputNumber2+" = "+ans.mul);
console.log(inputNumber1 + " / "+inputNumber2+" = "+ans.div);