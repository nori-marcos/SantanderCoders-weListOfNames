const nameInput = document.querySelector("input");

function addName() {
  const ul = document.querySelector("ul");
  const span = document.createElement("span");
  const li = document.createElement("li");
  const name = nameInput.value;
  const newRemoveButton = document.createElement("button");

  newRemoveButton.innerText = "Remove";

  span.append(name, newRemoveButton);

  li.appendChild(span);

  ul.appendChild(li);

  nameInput.value = "";
}

const addNameButton = document
  .querySelector("button")
  .addEventListener("click", addName);

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addName();
  }
});
