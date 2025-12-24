const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const toggleModalBtn = document.querySelector("#toggle-model");
const modal = document.querySelector(".modal");
let dragItem = null;
const rmvModal = document.querySelector(".modal .bg");
const tasks = document.querySelectorAll('.task');
const deleteBtn = document.querySelector('#dltBtn');
const createTaskBtn = document.querySelector("#add-task-btn");
tasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
        dragItem = task;
    });
});

function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", function (e) {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", function (e) {
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        if (dragItem) {
            column.appendChild(dragItem);
        }
        column.classList.remove("hover-over");
    });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// deleteBtn.addEventListener('click', function () {
//     alert('hi');
//     console.log(this.parentElement);
// });


// Modal logic
toggleModalBtn.addEventListener('click',()=>{
 modal.classList.toggle('active');
})
rmvModal.addEventListener('click',()=>{
    modal.classList.remove('active');
})

// Task creation Logic
createTaskBtn.addEventListener('click',()=>{
    let taskTittle = document.querySelector("#task-input").value;
    let taskDesc = document.querySelector("#task-desc").value;
    // console.log(taskDesc,taskTittle);
    const newTask = document.createElement("div");
    newTask.classList.add('task')
    newTask.setAttribute('draggable', 'true');
    newTask.innerHTML = `
    <h2>${taskTittle}</h2>
            <p>${taskDesc}</p>
            <button id="dltBtn">Delete</button>
    `
    newTask.addEventListener("dragstart", (e) => {
        dragItem = newTask;
    });
    todo.appendChild(newTask);
     modal.classList.remove('active');    
})

[todo,progress,done].forEach((col)=>{
    const tasks = col.querySelectorAll("#task");
    const count = col.querySelector(".right");
    count.innerText = tasks.length;
})