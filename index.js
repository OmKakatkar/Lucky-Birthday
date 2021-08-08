const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const btn = document.querySelector("#check");
const outputDiv = document.querySelector("#output");
const moodDiv = document.querySelector("#mood");

btn.addEventListener("click", () => {
  clickHandler(birthDate.value, luckyNum.value);
});

function clickHandler(myDate, num) {
  if (num === "" || num === 0) {
    outputDiv.innerText = "Enter a number bigger than 0";
    return;
  }
  if (myDate === "") {
    outputDiv.innerText = "Please enter a date";
    return;
  }
  myDate = myDate.split("-");
  let total = 0;
  for (let i = 0; i < myDate.length; i++) {
    for (let j = 0; j < myDate[i].length; j++) {
      total += myDate[i][j];
    }
  }

  let sum = 0;
  while (total) {
    sum += total % 10;
    total = Math.floor(total / 10);
  }

  if (sum % num) {
    outputDiv.innerText = "Aww! Not a lucky birthday";
    moodDiv.src = "./sad.png";
  } else {
    outputDiv.innerText = "Yay! Your Birthday is Lucky";
    moodDiv.src = "./happy.png";
  }
}
