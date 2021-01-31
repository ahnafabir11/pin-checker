function GeneratePin() {
  let pin = Math.round(Math.random() * 10000);
  let pinLength = (pin + '').length;

  document.getElementById('successMsg').style.display = 'none';
  document.getElementById('errorMsg').style.display = 'none';

  if (pinLength == 4) {
    document.getElementById('pinGenerateField').value = pin;
  } else {
    GeneratePin();
  }
}

const buttons = document.getElementById('allButtons');
buttons.addEventListener('click', function (event) {
  let btnValue = event.target.innerText;
  if (isNaN(btnValue)) {
    if (btnValue == 'C') {
      document.getElementById('submitInput').value = "";
    }
    if (btnValue == 'B') {
      let submitValue = document.getElementById('submitInput').value;
      let submitValueLenght = submitValue.length;
      let newValue = submitValue.slice(0, -1);
      document.getElementById('submitInput').value = newValue;
    }
  } else {
    let inputValue = document.getElementById('submitInput');
    inputValue.value = inputValue.value + btnValue;
  }
})


function checkPin() {
  let RealPinNum = document.getElementById('pinGenerateField').value;
  let userPinNum = document.getElementById('submitInput').value;

  const successMsg = document.getElementById('successMsg');
  const errorMsg = document.getElementById('errorMsg');
  if (RealPinNum == userPinNum) {
    successMsg.style.display = 'block';
    errorMsg.style.display = 'none';
    document.getElementById('pinGenerateField').value = "";
  } else {
    successMsg.style.display = 'none';
    errorMsg.style.display = 'block';
  }

  document.getElementById('submitInput').value = "";
}