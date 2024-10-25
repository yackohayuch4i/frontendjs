const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('TaskInput');
const addButton = document.getElementById('AddButton');

// Завантажуємо завдання з Local Storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

// Зберігаємо завдання до Local Storage
function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push(li.textContent.replace('X', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Додаємо завдання до DOM
function addTaskToDOM(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button>X</button>`;
    taskList.appendChild(li);
}

addButton.addEventListener('click', function(event) {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTaskToDOM(taskText);
        saveTasks();
        taskInput.value = '';
    }
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        taskList.removeChild(li);
        saveTasks();
    }
});

// Завантажуємо завдання при завантаженні сторінки
loadTasks();
