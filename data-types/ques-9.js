// Input the quantity and rate of a product then calculate the amount. 
// A discount of 10 % after then calculate discount amount and amount after discount.

function amountCalculator(quantity,rate){
    let amount = rate * quantity;
    let discount = amount * (10/100);
    let discountedAmount = amount - discount;

    return{
        amount:amount,
        discount:discount,
        discountedAmount:discountedAmount
    }
}

let inputRate = prompt("Enter the Rate of the product");
let inputQuantity = prompt("Enter Quantity of the product : ");
ans = amountCalculator(inputQuantity,inputRate);
alert(`Rate = ${inputQuantity}$, Quantity = ${inputRate}\nTotal Amount = ${ans.amount}$\nDiscount = ${ans.discount}$\nDiscounted Amount = ${ans.discountedAmount}$`);