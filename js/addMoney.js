/**
 * how to get a number from an input field
 * 1. create a variable
 * 2. right side document.getElementById 
 * (id)
 * 3. use .value to get the value of the input field
 * 4. use parseFloat()to convert the sting to a number
 */



document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault();


console.log('add money button clicked')

// getInputFieldValueId();
// const addMoney = getInputFieldValueId();
// console.log('add money value',addMoney);
// const addMoney = document.getElementById('input-add-money').value;
// const addMoneyNumber = parseFloat(addMoney);


const addMoney = getInputFieldValueId('input-add-money')
const pinNumber = getInputFieldValueId('input-pin-number')
console.log('add money with parameter',addMoney, pinNumber)

})