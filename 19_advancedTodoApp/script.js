const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

let dragItem = null;

const tasks = document.querySelectorAll('.task');
const deleteBtn = document.querySelector('#dltBtn');

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
