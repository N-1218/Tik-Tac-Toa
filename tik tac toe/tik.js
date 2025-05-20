let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; 
let count = 0; 

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
];

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  boxes.forEach((box) => box.disabled = true);
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText
    ) {
      showWinner(boxes[a].innerText);
      return true;
    }
  }
  return false;
};

const resetGame = () => {
  turnO = true;
  count = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "O" : "X";
    box.disabled = true;
    count++;
    if (checkWinner()) return;

    if (count === 9) {
      msg.innerText = "Game Draw!";
      msgContainer.classList.remove("hide");
    }

    turnO = !turnO;
  });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
