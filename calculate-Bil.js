const promoCodes = ["11500", "12000", "12500"];
let bill = 5000;
function applyDiscount(bill){
    return bill - bill*0.10;
}
function applyTax(bill){
    return bill + bill*0.18;
}
function applyPromo(bill){
let code = prompt("Enter promo code: ");
if(code == "11500"){
    return bill - bill*0.10 ;11500
}
else if(code == "12000"){
    return bill - bill*0.20;
}
else if(code == "12500"){
    return bill - bill*0.25;
}
else{
    return bill;
}
}
const grandBill = applyPromo(applyTax(applyDiscount(bill)));
console.log(grandBill);