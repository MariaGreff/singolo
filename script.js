const MENU = document.getElementById("menu");
const SUBMIT_BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

SUBMIT_BUTTON.addEventListener("click", () => {
  let subject = document.getElementById("subject").value.toString();
  subject = subject === "" ? "Без темы" : "Тема: " + subject;
  let describe = document.getElementById("describe").value.toString();
  describe = describe === "" ? "Без описания" : "Описание: " + describe;
  let result = subject + "\n" + describe;
  document.getElementById("result").innerText = result;
  document.getElementById("message-block").classList.remove("hidden");
});

CLOSE_BUTTON.addEventListener("click", () => {
  document.getElementById("result").innerText = " ";
  document.getElementById("message-block").classList.add("hidden");
});

const addButtonsClickedHandler = () => {
  document.querySelector(".portfolio__buttons").addEventListener("click", e => {
    if (e.target.classList.contains("button")) {
      let clickedButton = e.target;
      removeSelectedButtons();
      selectClickedButton(clickedButton);
    }
  });
};

const removeSelectedButtons = () => {
  let buttons = document.querySelectorAll(".button");
  buttons.forEach(button => {
    button.classList.remove("button_selected");
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let arrayRandom = [];
    for (let i = 0; i < 12; i++) {
      let randomNumber = Math.ceil(Math.random() * array.length - 1);
      arrayRandom.push(array.splice(randomNumber, 1));
    }
    let j = 0;
    document.querySelectorAll(".portfolio__item").forEach(item => {
      item.style.order = arrayRandom[j];
      j++;
    });
  });
};

const selectClickedButton = clickedButton => {
  clickedButton.classList.add("button_selected");
};

addButtonsClickedHandler();
