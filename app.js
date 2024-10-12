// ToDoList class
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
        this.taskId = 0;
        this.loadEventListeners();
    }
    ToDoList.prototype.loadEventListeners = function () {
        var _this = this;
        var addTaskBtn = document.getElementById('add-task-btn');
        addTaskBtn.addEventListener('click', function () { return _this.addTask(); });
    };
    ToDoList.prototype.addTask = function () {
        var taskInput = document.getElementById('task-input');
        var taskContent = taskInput.value.trim();
        if (taskContent) {
            this.tasks.push({ id: this.taskId++, content: taskContent });
            taskInput.value = '';
            this.renderTasks();
        }
    };
    ToDoList.prototype.renderTasks = function () {
        var _this = this;
        var taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        this.tasks.forEach(function (task) {
            var li = document.createElement('li');
            li.textContent = task.content;
            var removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', function () { return _this.removeTask(task.id); });
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    };
    ToDoList.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        this.renderTasks();
    };
    return ToDoList;
}());
// Initialize the ToDoList
document.addEventListener('DOMContentLoaded', function () { return new ToDoList(); });
