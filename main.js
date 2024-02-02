const buttons = [
  document.getElementById("button1"),
  document.getElementById("button2"),
  document.getElementById("button3"),
  document.getElementById("button4"),
];

const answers = [
  document.getElementById("answer1"),
  document.getElementById("answer2"),
  document.getElementById("answer3"),
  document.getElementById("answer4"),
];

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

buttons[0].addEventListener("click", (event) => {
  answerDisplay(0);
});
buttons[1].addEventListener("click", (event) => {
  answerDisplay(1);
});
buttons[2].addEventListener("click", (event) => {
  answerDisplay(2);
});
buttons[3].addEventListener("click", (event) => {
  answerDisplay(3);
});
