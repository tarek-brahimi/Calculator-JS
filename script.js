let result1;
let number1 = "";
let number2 = "";
let operator = "";
let result11 = 0;
let justCalculated = false;

window.addEventListener("DOMContentLoaded", function () {
  result1 = document.querySelector(".clacultaion");
  const saved = localStorage.getItem("result2");
  if (saved && result1) {
    result1.innerHTML = saved;
  } else if (result1) {
    result1.innerHTML = "0";
  }
});

function affichage() {
  if (!result1) return;

  if (number1 === "" && operator === "" && number2 === "") {
    result1.innerHTML = "0";
  } else {
    result1.innerHTML = `${number1} ${operator} ${number2}`;
  }
}

function number(a) {
  if (justCalculated && operator === "") {
    number1 = result11.toString();
    justCalculated = false;
  }

  if (operator === "") {
    if (number1.length < 7) {
      number1 += a;
    } else {
      alert("Maximum 7 chiffres!");
      return;
    }
  } else {
    if (number2.length < 7) {
      number2 += a;
    } else {
      alert("Maximum 7 chiffres!");
      return;
    }
  }

  affichage();
}

function opernde(op) {
  if (number1 === "") return;

  if (justCalculated) {
    justCalculated = false;
  } else if (number1 !== "" && operator !== "" && number2 !== "") {
    result11 = operation();
    number1 = result11.toString();
    number2 = "";
  }

  operator = op;
  affichage();
}

function reset() {
  number1 = "";
  number2 = "";
  operator = "";
  justCalculated = false;
  affichage();
}
function deleat() {
  if (number2 !== "") {
    number2 = number2.slice(0, -1);
  } else if (operator !== "") {
    operator = "";
  } else if (number1 !== "") {
    number1 = number1.slice(0, -1);
  }

  affichage();
}

function result() {
  if (number1 === "" || (operator !== "" && number2 === "")) return;

  if (operator === "/" && Number(number2) === 0) {
    alert("Division par zéro impossible!");
    return;
  }

  if (operator !== "" && number2 !== "") {
    result11 = operation();
  } else {
    result11 = Number(number1);
  }

  if (result1) {
    result1.innerHTML = result11;
  }

  localStorage.setItem("result2", result11);

  number1 = result11.toString();
  number2 = "";
  operator = "";
  justCalculated = true;
}

function operation() {
  const num1 = Number(number1);
  const num2 = Number(number2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return num1;
  }
}
