import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // make row
  const p = document.createElement("p");
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "Completed";
  completeButton.addEventListener("click", () => {
    completeButtonAction(completeButton);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFromList(deleteButton.closest("li"), "incomplete-list", true);
  });

  const li = document.createElement("li");
  li.className = "list-row";
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // add row to list
  document.getElementById("incomplete-list").appendChild(li);
};

const completeButtonAction = (completeButton) => {
  // delete from incomplete list
  deleteFromList(completeButton.closest("li"), "incomplete-list");

  const addTarget = completeButton.parentNode;
  const completeText = addTarget.firstElementChild.innerText;
  addTarget.textContent = null;

  const p = document.createElement("p");
  p.innerText = completeText;

  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.addEventListener("click", () => {
    backButtonAction(backButton);
  });

  addTarget.appendChild(p);
  addTarget.appendChild(backButton);

  document.getElementById("complete-list").appendChild(addTarget);
};

const backButtonAction = (backButton) => {
  deleteFromList(backButton.closest("li"), "complete-list");

  const addTarget = backButton.parentNode;
  const incompleteText = addTarget.firstElementChild.innerText;
  addTarget.textContent = null;

  const p = document.createElement("p");
  p.innerText = incompleteText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "Completed";
  completeButton.addEventListener("click", () => {
    completeButtonAction(completeButton);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFromList(deleteButton.closest("li"), "incomplete-list", true);
  });

  const li = document.createElement("li");
  li.className = "list-row";
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromList = (target, list, needConfirm = false) => {
  let deleteConfirm = true;
  if (needConfirm) {
    // eslint-disable-next-line no-restricted-globals
    deleteConfirm = confirm("Are you sure?");
  }

  if (deleteConfirm) {
    document.getElementById(list).removeChild(target);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
