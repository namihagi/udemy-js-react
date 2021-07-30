import "./styles.css";

/* <li>
  <div class="list-row">
    <p>ToDo 1</p>
    <button>Completed</button>
    <button>Delete</button>
  </div>
</li> */

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // make row
  const p = document.createElement("p");
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "Completed";
  completeButton.addEventListener("click", () => {
    // delete from incomplete list
    deleteFromIncompleteList(completeButton.closest("li"));

    const addTarget = completeButton.parentNode;
    const completeText = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = completeText;

    const backButton = document.createElement("button");
    backButton.innerText = "Back";

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const li = document.createElement("li");
  li.appendChild(div);

  // add row to list
  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
