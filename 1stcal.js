function getHistory() {
  return document.getElementById("allhistory-value").innerText;
}
function printHistory(num) {
  document.getElementById("allhistory-value").innerText = num;
}
function getOutput() {
  return document.getElementById("alloutput-value").innerText;
}
function printOutput(num) {
  if (num === "") {
    document.getElementById("alloutput-value").innerText = num;
  } else {
    document.getElementById("alloutput-value").innerText = getFormattedNumber(
      num
    );
  }
}
function getFormattedNumber(num) {
  if (num == "=") {
    return "";
  }
  const x = Number(num);
  const value = x.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }
    if (this.id == "backspace") {
      let alloutput = reverseNumberFormat(getOutput()).toString();
      if (alloutput) {
        alloutput = alloutput.substring(0, alloutput.length - 1);
        printOutput(alloutput);
      }
    } else {
      let alloutput = getOutput();
      let allhistory = getHistory();
      if (alloutput == "" && allhistory != "") {
        if (isNaN(allhistory[allhistory.length - 1])) {
          allhistory = allhistory.substring(0, history.length - 1);
        }
      }
      if (alloutput != "" || allhistory != "") {
        alloutput =
          alloutput == "" ? alloutput : reverseNumberFormat(alloutput);
        allhistory = allhistory + alloutput;
        if (this.id == "=") {
          let result = eval(allhistory);
          printOutput(result);
          printHistory("");
        } else {
          allhistory = allhistory + this.id;
          printHistory(allhistory);
          printOutput("");
        }
      }
    }
  });
}
const number = document.getElementsByClassName("number");
// console.log(number);
// const num = document
//   .querySelector(".keyboard")
//   .addEventListener("click", function(e) {});
document.get;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
    let alloutput = reverseNumberFormat(getOutput());
    if (alloutput != NaN) {
      alloutput = alloutput + this.id;
      printOutput(alloutput);
    }
  });
}
const number1 = document.getElementsByClassName("number1");
for (let i = 0; i < number1.length; i++) {
  number1[i].addEventListener("click", function() {
    let alloutput = reverseNumberFormat(getOutput());
    if (alloutput != NaN) {
      alloutput = alloutput + this.id;
      printOutput(alloutput);
    }
  });
}
