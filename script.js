let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
span = document.querySelectorAll("span");
symbols = ["+", "-", "*", "/"];
values = [];
let screenValue = "";

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (
      symbols.includes(buttonText) &&
      values.length > 1 &&
      symbols.includes(values[values.length - 1])
    ) {
      values[values.length - 1] = buttonText;
      screenValue = values.join("");
      screen.innerText = screenValue;
      return;
    }

    if (buttonText !== "=") values.push(buttonText);

    if (buttonText == "C") {
      screen.innerText = screenValue = "";
      result.innerText = "0";
      values = [];
      validate = false;
    } else if (buttonText == "=") {
      document.getElementById("screen").innerText = screenValue;
      document.getElementById("result").innerText = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.innerText = screenValue;
    }
  });
}
