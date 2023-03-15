const form = document.getElementById("newTask");
const newTask = document.getElementById("newTaskInput");
const emptyTaskAlert = document.getElementById("emptyTask")
const taskscontainer = document.getElementById("container");
const tasksList = document.getElementById("tasks");


form.addEventListener("submit", e =>{
    //el form no se refezca al apretar el boton
    e.preventDefault();

    const task = newTask.value;

    //si el valor de task no exite
    if(!task){
        emptyTaskAlert.classList.remove("hidden");
        setTimeout(() => {
            emptyTaskAlert.classList.add("hidden");
        }, 3000);
        return;
    };

    //creacion del mock
    const taskElement = document.createElement("div");
    taskElement.classList.add("container");
    
    const taskInput = document.createElement("input");
    taskInput.classList.add("taskInput");
    taskInput.value = task;
    taskInput.type = "text";
    taskInput.setAttribute("readonly", "readonly");

    taskElement.append(taskInput);
    tasksList.append(taskElement);

    //creacion de botones
    const taskBtns = document.createElement("div");
    taskBtns.classList.add("btns");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    const scrapBtn = document.createElement("button");
    scrapBtn.classList.add("scrap");
    const eraseBtn = document.createElement("button");
    eraseBtn.classList.add("erase");

    taskBtns.appendChild(editBtn);
    taskBtns.appendChild(scrapBtn);
    taskBtns.appendChild(eraseBtn);

    taskElement.appendChild(taskBtns);
});
