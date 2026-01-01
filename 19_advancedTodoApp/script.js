/* =========================
   DOM REFERENCES
========================= */

const todoColumn = document.querySelector("#todo");
const progressColumn = document.querySelector("#progress");
const doneColumn = document.querySelector("#done");
const deleteBtn = document.querySelector(".dltBtn");
const modal = document.querySelector(".modal");
const modalBackdrop = document.querySelector(".modal .bg");
const openModalBtn = document.querySelector("#toggle-model");
const addTaskBtn = document.querySelector("#add-task-btn");

const columns = [todoColumn, progressColumn, doneColumn];

let draggedTask = null;
let tasksData = {};

/* ========================= TASK CREATION ========================= */

function createTaskElement(title, description) {
  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;

  task.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <button class="dltBtn">Delete</button>
  `;

  task.addEventListener("dragstart", () => {
    draggedTask = task;
  });

  return task;
}

/* ========================= DELETE TASK ========================= */
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dltBtn")) return;

  const task = e.target.closest(".task");
  if (!task) return;

  task.remove();
  saveTasksToLocalStorage();
});

/* ========================= LOCAL STORAGE FUNCTIONS ========================= */

function saveTasksToLocalStorage() {
  tasksData = {};

  columns.forEach((column) => {
    const tasks = column.querySelectorAll(".task");
    const counter = column.querySelector(".right");

    counter.innerText = tasks.length;

    tasksData[column.id] = [...tasks].map((task) => ({
      title: task.querySelector("h2").innerText,
      desc: task.querySelector("p").innerText,
    }));
  });

  localStorage.setItem("tasks", JSON.stringify(tasksData));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) return;

  const data = JSON.parse(storedTasks);

  Object.keys(data).forEach((columnId) => {
    const column = document.getElementById(columnId);

    data[columnId].forEach(({ title, desc }) => {
      column.appendChild(createTaskElement(title, desc));
    });
  });

  saveTasksToLocalStorage();
}

/* ========================= TASK DRAG & DROP ========================= */

function enableDragAndDrop(column) {
  column.addEventListener("dragover", (e) => e.preventDefault());

  column.addEventListener("dragenter", () => {
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("hover-over");
  });

  column.addEventListener("drop", () => {
    if (!draggedTask) return;

    column.appendChild(draggedTask);
    column.classList.remove("hover-over");
    saveTasksToLocalStorage();
  });
}

/* =========================
   MODAL HANDLERS
========================= */

openModalBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

modalBackdrop.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* =========================
   ADD TASK
========================= */

addTaskBtn.addEventListener("click", () => {
  const title = document.querySelector("#task-input").value.trim();
  const desc = document.querySelector("#task-desc").value.trim();

  if (!title || !desc) {
    alert("Please Enter Something!!")
    return;
  }

  todoColumn.appendChild(createTaskElement(title, desc));
  modal.classList.remove("active");

  saveTasksToLocalStorage();
});

/* =========================
   INITIALIZATION
========================= */

columns.forEach(enableDragAndDrop);
loadTasksFromLocalStorage();
