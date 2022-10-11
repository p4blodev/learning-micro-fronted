import _ from "lodash";
import style from "./index.scss";
import "./clearButton";

const btn1 = document.getElementById("button1");

btn1.addEventListener("click", function buttonClicked() {
  const el = document.getElementById("header");
  el.innerHTML = "I've updated the text";

  const listItems = ["Apple", "Orange", "Banana"];
  const ul = document.getElementById("shoppingList");

  // _. is a lodash feature
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;

    ul.appendChild(tempEl);
  });
});

btn1.classList.add([style.button]);
