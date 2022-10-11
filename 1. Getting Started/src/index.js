import _ from "lodash";

document
  .getElementById("button1")
  .addEventListener("click", function buttonClicked() {
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
