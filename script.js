const addBtn = document.querySelector("#addbtn");
const inputValue = document.querySelector("input");

const ulPendingTasks = document.querySelector("#ulPendingTasks");
const ulCompletedTasks = document.querySelector(".completedItems");

const addTask = (taskToBeAdded) => {
  const taskItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const btnDiv = document.createElement("div");
  const taskText = document.createElement("span");

  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "btn-outline-danger");

  completeBtn.innerText = "Mark as Completed";
  completeBtn.classList.add("btn", "btn-outline-success");

  btnDiv.classList.add("liButtons");

  taskText.innerText = taskToBeAdded;
  btnDiv.appendChild(deleteBtn);
  btnDiv.appendChild(completeBtn);

  taskItem.appendChild(taskText);
  taskItem.appendChild(btnDiv);
  ulPendingTasks.prepend(taskItem);
};

ulCompletedTasks.addEventListener("click", (event) => {
  if (event.target.innerText == "Delete") {
    event.target.closest("li").remove();
  }
});

ulPendingTasks.addEventListener("click", (event) => {
  if (event.target.innerText == "Mark as Completed") {
    const spanElement = event.target.closest("li").querySelector("span");
    const taskText = spanElement.textContent;
    addToCompletedTasks(taskText);
    event.target.closest("li").remove();
  } else if (event.target.innerText == "Delete") {
    event.target.closest("li").remove();
  }
});

const addToCompletedTasks = (taskToBeAdded) => {
  const taskItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const btnDiv = document.createElement("div");
  const taskText = document.createElement("span");

  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "btn-outline-danger");

  completeBtn.innerText = "Already Completed";
  completeBtn.classList.add("btn", "btn-success");
  completeBtn.disabled = true;

  btnDiv.classList.add("liButtons");

  taskText.innerText = taskToBeAdded;
  btnDiv.appendChild(deleteBtn);
  btnDiv.appendChild(completeBtn);

  taskItem.appendChild(taskText);
  taskItem.appendChild(btnDiv);
  ulCompletedTasks.prepend(taskItem);
};

addBtn.addEventListener("click", () => {
  if (inputValue.value.trim()) {
    addTask(inputValue.value.trim());
    inputValue.value = "";
  }
});

inputValue.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addBtn.click();
  }
});
