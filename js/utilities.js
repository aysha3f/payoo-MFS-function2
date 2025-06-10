/**
 * common shared functions here
 */

// function getInputFieldValueId(){
//     console.log('will get input field value id')
//     const addMoney = document.getElementById('input-add-money').value;
// return addMoney;
// }

function getInputFieldValueId(id){
const inputValue = document.getElementById(id).value;
return inputValue;
}