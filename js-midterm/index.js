const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const numberElements = document.querySelectorAll(".number");
const businessNumber = "3034921811";

const MIN_VALUE = 0;
const MAX_VALUE = 9;

let a = 0;

plusButtons.forEach((plusButton, index) => {
  plusButton.addEventListener("click", () => {
    if (a < MAX_VALUE) {
      a++;
      numberElements[index].innerText = a;
    }
  });
});

minusButtons.forEach((minusButton, index) => {
  minusButton.addEventListener("click", () => {
    if (a > MIN_VALUE) {
      a--;
      numberElements[index].innerText = a;
    }
  });
});

const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", () => {
  let submittedNumber = "";
  for (const element of numberElements) {
    submittedNumber += element.innerText;
  }

  if (submittedNumber === businessNumber) {
    alert("Slay! You've entered the number for the best school ever, the Leeds School of Business!");
  } else {
    alert("Sorry! That's wrong! Try again!");
  }
});
