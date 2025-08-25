// tasks.js
import fs from "fs";

const FILE = "./tasks.json";

// Load tasks from file (or empty array if file doesn't exist)
function loadTasks() {
    if (!fs.existsSync(FILE)) return [];
    const data = fs.readFileSync(FILE, "utf-8");
    return data ? JSON.parse(data) : [];
}

// Save tasks back to file
function saveTasks(tasks) {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

export function addTask(title) {
    const tasks = loadTasks()
    const task = { 
        id: tasks.length + 1,
        title,
        completed: false
    }

    tasks.push(task)
    saveTasks(tasks)
    return task
}

export function listTasks() {
    return loadTasks()
}

export function completeTask(id) {
    const tasks = loadTasks()
    const task = tasks.find(t => t.id === id)

    if (task) {
        task.completed = true
        saveTasks(tasks)
        return task
    }
    return null
}

export function deleteTask(id) {
    let tasks = loadTasks();
    const index = tasks.findIndex(t => t.id === id);

    if (index !== -1) {
        const [removed] = tasks.splice(index, 1);
        saveTasks(tasks);
        return removed;
    }
    return null;
}