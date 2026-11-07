import { 
    addTask, 
    listTasks, 
    completeTask, 
    deleteTask,  
    updateTask 
} from "../src/tasks.js";
import { formatTask, banner} from "../src/utils.js";
import chalk from "chalk";

class TasksCommands {
    
    static async add(title) {
        if (!title) {
            console.error("❌ Please provide a task title.");
            process.exitCode = 1
            return;
        }
        const task = await addTask(title);
        console.log("✅ Task added:", chalk.cyan(formatTask(task)));
    }

    static async list() {
        const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightred", "brightgreen", "brightyellow", "brightblue", "brightmagenta", "brightcyan", "reset"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        banner("TASK LIST", randomColor);

        const tasks = await listTasks()
        if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }

        tasks.forEach(task => console.log(formatTask(task)));
        console.log("");
        console.log("=".repeat(25));
        console.log("");
    }

    static async complete(prefix) {
       if (!prefix) {
        console.error("❌ Please provide a task ID.")
        process.exitCode = 1
        return
       }

       const task = await completeTask(prefix)

       console.log("✅ Task completed:", chalk.green(formatTask(task)))
    }

    static async delete(prefix) {
        if (!prefix) {
            console.error("❌ Please provide a task ID.")
            process.exitCode = 1
            return
        }
        const task = await deleteTask(prefix);
        if (task) {
            console.log(chalk.red("🗑️ Task deleted:", formatTask(task)));
        } else {
            console.log("❌ Task not found.");
        }
        return;
    }


    static async update(prefix, title) {
        if (!prefix) {
            console.error("❌ Please provide a task ID.")
            process.exitCode = 1
            return
        }
        
        if (!title) {
            console.error("❌ Please provide a task title.");
            process.exitCode = 1
            return;
        }
        const task = await updateTask(prefix, title);
        if (task) {
            console.log("✅ Task updated:", chalk.cyan(formatTask(task)));
        } else {
            console.log("❌ Task not found.");
        }
        return;
    }
}

export default TasksCommands