// tasks.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = path.join(__dirname, "tasks.json");

// storage
function loadTasks() {
    if (!fs.existsSync(FILE)) return [];
    const data = fs.readFileSync(FILE, "utf-8");
    return data ? JSON.parse(data) : [];
}

// Save tasks back to file
function saveTasks(tasks) {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

// Actions

function nextId(arr) {
    const ids = arr.map(t => t.id)
    return ids.length ? Math.max(...ids) + 1 : 1
}
export function addTask(title) {
    const tasks = loadTasks()
    const task = { 
        id: nextId(tasks),
        date: new Date().toLocaleString(),
        title,
        completed: false
    }

    tasks.push(task)
    saveTasks(tasks)
    return task
}

export function listTasks() {
    if (!fs.existsSync(FILE) || fs.readFileSync(FILE, "utf-8") === "[]") {
        console.log("Tasks list is empty.");
    }
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

export function updateTask(id, title) {
    const tasks = loadTasks()
    const task = tasks.find(t => t.id === id)

    if (task) {
        task.title = title
        saveTasks(tasks)
        return task
    }
    return null
}

export function clearTasks() {
    fs.writeFileSync(FILE, "[]")
}