const nameInput = document.querySelector("input");

function addName() {
  // event.preventDefault;
  const ul = document.querySelector("ul");
  const span = document.createElement("span");
  const li = document.createElement("li");
  const name = nameInput.value;

  const removeNameButton = document.createElement("button");
  removeNameButton.innerText = "Remove";

  removeNameButton.addEventListener("click", function () {
    ul.removeChild(li);
  });

  span.append(name, removeNameButton);

  li.appendChild(span);

  ul.appendChild(li);

  nameInput.value = "";
}

function removeName() {
  const ul = document.querySelector("ul");
  ul.removeChild("li");
}

const addNameButton = document
  .querySelector("button")
  .addEventListener("click", addName);

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault;
    addName();
  }
});
