const nameInput = document.querySelector("input");

function addName() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const name = nameInput.value;

  const removeNameButton = document.createElement("button");
  removeNameButton.innerText = "Remove";
  removeNameButton.classList.add("btn", "btn-secondary", "btn-sm");

  removeNameButton.addEventListener("click", function () {
    ul.removeChild(li);
  });

  if (name !== "") {
    li.append(name, removeNameButton);
  } else {
    alert("Fill the name!");
  }

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
    event.preventDefault();
    addName();
  }
});
