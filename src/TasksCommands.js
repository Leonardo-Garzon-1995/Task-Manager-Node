import { addTask, listTasks, completeTask, deleteTask, clearTasks, updateTask } from "../src/tasks.js";
import { formatTask, banner} from "../src/utils.js";
import chalk from "chalk";

class TasksCommands {
    
    static add(title) {
        if (!title) {
            console.log("❌ Please provide a task title.");
            return;
        }
        const task = addTask(title);
        console.log("✅ Task added:", chalk.cyan(formatTask(task)));
    }

    static list() {
        const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightred", "brightgreen", "brightyellow", "brightblue", "brightmagenta", "brightcyan", "reset"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            banner("TASK LIST", randomColor);

            listTasks().forEach(task => console.log(formatTask(task)));
            console.log("");
            console.log("=".repeat(25));
            console.log("");
    }

    static complete(id) {
        if (isNaN(id)) {
                console.log("❌ Please provide a valid task ID.");
                return
        }
        const task = completeTask(id);
        if (task) {
            console.log("✅ Task completed:", chalk.green(formatTask(task)));
        } else {
            console.log(chalk.red("❌ Task not found."));
        }
    }

    static delete(id) {
        if (isNaN(id)) {
                console.log("❌ Please provide a valid task ID.");
                return;
            }
        const task = deleteTask(id);
        if (task) {
            console.log(chalk.red("🗑️ Task deleted:", formatTask(task)));
        } else {
            console.log("❌ Task not found.");
        }
        return;
    }

    static clear() {
        clearTasks();
        console.log("✅ Tasks list cleared.");
        return
    }

    static update(id, title) {
        if (isNaN(id)) {
                console.log("❌ Please provide a valid task ID.");
                return;
        }
        
        if (!title) {
            console.log("❌ Please provide a task title.");
            return;
        }
        const task = updateTask(id, title);
        if (task) {
            console.log("✅ Task updated:", chalk.cyan(formatTask(task)));
        } else {
            console.log("❌ Task not found.");
        }
        return;
    }
}

export default TasksCommands