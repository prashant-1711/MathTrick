let result1, result2, result3;

document.getElementById("submitBtn1").addEventListener("click", function () {
  const number1 = parseInt(document.getElementById("number1").value);
  result1 = number1 - 2 + 2000;
  document.getElementById("output1").textContent = `Final answer is going to be: ${result1}`;
});

document.getElementById("submitBtn2").addEventListener("click", function () {
  const number2 = parseInt(document.getElementById("number2").value);
  const digit1 = 9 - Math.floor(number2 / 100);
  const digit2 = 9 - Math.floor((number2 / 10) % 10);
  const digit3 = 9 - (number2 % 10);
  result2 = digit1 * 100 + digit2 * 10 + digit3;
  document.getElementById("output2").textContent = `A number given by me: ${result2}`;
});

document.getElementById("submitBtn3").addEventListener("click", function () {
  const number3 = parseInt(document.getElementById("number3").value);
  const digit1 = 9 - Math.floor(number3 / 100);
  const digit2 = 9 - Math.floor((number3 / 10) % 10);
  const digit3 = 9 - (number3 % 10);
  result3 = digit1 * 100 + digit2 * 10 + digit3;
  document.getElementById("output3").textContent = `Another number given by me: ${result3}`;

  document.getElementById("finalOutput").textContent = `Now add all 5 numbers and check with the result: ${result1}`;
});
