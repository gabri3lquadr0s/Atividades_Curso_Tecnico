document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Por favor, insira uma tarefa válida!");
        }
    });
     taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });


    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.addEventListener("change", toggleTaskCompletion);

        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    }

   function toggleTaskCompletion(event) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle("completed");
    }

    // Excluir uma tarefa quando o botão de exclusão for clicado
    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});
