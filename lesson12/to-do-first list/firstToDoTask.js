const taskList = document.getElementById('taskList');
const TaskInput = document.getElementById('TaskInput');
const AddButton = document.getElementById('AddButton');

AddButton.addEventListener ('click', function(event){
    const taskText = TaskInput.value.trim();
    if(taskText !== ''){
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button>Видалити</button>`
        taskList.appendChild(li);
        TaskInput.value = '';
    }
});

taskList.addEventListener ('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});
