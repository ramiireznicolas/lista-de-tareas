const form = document.getElementById("newTask");
const newTask = document.getElementById("newTaskInput");
const emptyTaskAlert = document.getElementById("emptyTask")
const taskscontainer = document.getElementById("container");
const tasksList = document.getElementById("tasks");


form.addEventListener("submit", e => {
    //el form no se refezca al apretar el boton
    e.preventDefault();

    const task = newTask.value;

    //si el valor de task no exite
    if (!task) {
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

    //listener para los btns:
    editBtn.addEventListener("click", () => {
        if (editBtn.classList.contains("edit")) {
            editBtn.classList.remove("edit");
            editBtn.classList.add("save");

            taskInput.removeAttribute("readonly");
            taskInput.focus();
        } else{
            editBtn.classList.add("edit");
            editBtn.classList.remove("save");
            taskInput.setAttribute("readonly", "readonly");
        }
    });

    scrapBtn.addEventListener("click", () => {
        if (scrapBtn.classList.contains("scrap")) {
            scrapBtn.classList.remove("scrap");
            scrapBtn.classList.add("notDone");

            taskInput.classList.add("done");
        } else{
            scrapBtn.classList.add("scrap");
            scrapBtn.classList.remove("notDone");

            taskInput.classList.remove("done");
        };
    });

    eraseBtn.addEventListener("click", () =>{
        tasksList.removeChild(taskElement);
    })


});
