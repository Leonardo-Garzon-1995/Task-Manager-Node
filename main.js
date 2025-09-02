import { addTask, listTasks, completeTask, deleteTask } from "./tasks.js";

import divider, { formatTask } from "./utils.js";

import chalk from "chalk";

const [,, command, ...args] = process.argv

switch (command) {
    case "add": {   //command: add "write a task "
        const title = args.join(" ")
        if (!title) {
            console.log("❌ Please provide a task title.")
            break
        }
        const task = addTask(title);
        console.log("✅ Task added:", chalk.blue(formatTask(task)));
        break;
    }

    case "list": {  // command: list - it shows the updated list
        divider();
        console.log("📋 TASK LIST:");
        listTasks().forEach(task => console.log(formatTask(task)));
        break;
    }

    case "complete": {  //command: complete # - it shows which task has been completed
        const id = parseInt(args[0], 10);
        if (isNaN(id)) {
            console.log("❌ Please provide a valid task ID.");
            break;
        }
        const task = completeTask(id);
        if (task) {
            console.log(chalk.green("✅ Task completed:", formatTask(task)));
        } else {
            console.log("❌ Task not found.");
        }
        break;
    }

    case "delete": {   // command: delete # - deletes the selected task
        const id = parseInt(args[0], 10);
        if (isNaN(id)) {
            console.log("❌ Please provide a valid task ID.");
            break;
        }
        const task = deleteTask(id);
        if (task) {
            console.log(chack.red("🗑️ Task deleted:", formatTask(task)));
        } else {
            console.log("❌ Task not found.");
        }
        break;
    }

    default:
    console.log("❓ Unknown command. Use:");
    console.log("   node main.js add \"Task description\"");
    console.log("   node main.js list");
    console.log("   node main.js complete <taskId>");
}



