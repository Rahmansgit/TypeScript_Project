// Task interface
interface Task {
    id: number;
    content: string;
}

// ToDoList class
class ToDoList {
    private tasks: Task[] = [];
    private taskId: number = 0;

    constructor() {
        this.loadEventListeners();
    }

    private loadEventListeners() {
        const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
        addTaskBtn.addEventListener('click', () => this.addTask());
    }

    private addTask() {
        const taskInput = document.getElementById('task-input') as HTMLInputElement;
        const taskContent = taskInput.value.trim();

        if (taskContent) {
            this.tasks.push({ id: this.taskId++, content: taskContent });
            taskInput.value = '';
            this.renderTasks();
        }
    }

    private renderTasks() {
        const taskList = document.getElementById('task-list') as HTMLUListElement;
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.content;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => this.removeTask(task.id));
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    private removeTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.renderTasks();
    }
}

// Initialize the ToDoList
document.addEventListener('DOMContentLoaded', () => new ToDoList());