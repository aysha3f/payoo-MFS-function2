function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
   
      return inputNumber;
}

function getTextFieldValueById (id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById (id){
  // hide all sections first
document.getElementById('add-money-form').classList.add('hidden');
document.getElementById('cash-out-form').classList.add('hidden');
document.getElementById('transaction-histroy').classList.add('hidden');
// show the section with the provided id as  parameter
document.getElementById(id).classList.remove('hidden')
}