const nameInput = document.querySelector("input");

const addNameButton = document
  .querySelector("button")
  .addEventListener("click", addName);

nameInput.keyup(function (event) {
  if (event.keyCode === 13) {
    addNameButton.click(addName);
  }
});

function addName() {
  const newListItem = document.createElement("li");

  const newName = nameInput.value;

  const newRemoveButton = document.createElement("button");
  newRemoveButton.innerText = "Remove";

  newListItem.append(newName, newRemoveButton);

  document.querySelector("ul").appendChild(newListItem);

  nameInput.value = "";
}
