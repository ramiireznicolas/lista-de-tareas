const form = document.getElementById("newTask");
const newTask = document.getElementById("newTaskInput");
const emptyTaskAlert = document.getElementById("emptyTask")

form.addEventListener("submit", e =>{
    //el form no se refezca al apretar el boton
    e.preventDefault();

    const task = newTask.value;

    if(!task){
        emptyTaskAlert.classList.remove("hidden");
        setTimeout(() => {
            emptyTaskAlert.classList.add("hidden");
        }, 3000);
        return;
    }
});
