/*  function dobleIt = num * 2;
    return result;
}
const firstMultiplecation = dobleit(5);
const secondMultiplecation = dobleit(7)
 */
function GetInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return AmountValue;
}
function updateTotalField(depositAmount){
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function(){
/*  const depositInput = document.getElementById('deposit-input');
    const dipositAmountText = depositInput.value;
    const depositAmount = parseFloat(dipositAmountText); */
    const depositAmount = GetInputValue('deposit-input');

    // get an update deposit total
/*     const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount; */
    updateTotalField(depositAmount);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotalText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
/*     const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = GetInputValue('withdraw-input');

    //get an update withdraw tatal    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})