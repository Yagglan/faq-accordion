const buttons = [
  document.getElementById("button1"),
  document.getElementById("button2"),
  document.getElementById("button3"),
  document.getElementById("button4"),
];

buttons.forEach((button, i) => {
  button.addEventListener("click", (event) => {
    answerDisplay(i);
  });
});

document.querySelectorAll(".question").forEach((question, i) => {
  question.addEventListener("click", (event) => {
    answerDisplay(i);
  });
});

const answers = document.querySelectorAll("p");

function answerDisplay(id) {
  if (answers[id].classList.contains("answerOff")) {
    answers[id].className = "answerOn";
    buttons[id].innerHTML =
      '<img src="./assets/images/icon-minus.svg" alt="" class="minusIcon" id="button1"/>';
  } else {
    answers[id].className = "answerOff";
    buttons[id].innerHTML =
      '<img src="./assets/images/icon-plus.svg" alt="" class="plusIcon" id="button1"/>';
  }
}
