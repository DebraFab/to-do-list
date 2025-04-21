let tasks=[];
const addTask = ()=>{
    const taskInput = document.getElementById(taskInput);
    const text = taskInput.ariaValueMax.trim();
    if (text){
        tasks.push({text:text, completed:false});
    }
    
}
document.getElementById("newTask").addEventListener("click"e.preventDefault();

addTask();
});
