import { addTask, listTasks, completeTask, deleteTask } from "./tasks.js";

import divider, { formatTask } from "./utils.js";

const [,, command, ...args] = process.argv

switch (command) {
    case "add": {   //command: add "write a task "
        const title = args.join(" ")
        if (!title) {
            console.log("❌ Please provide a task title.")
            break
        }
        const task = addTask(title);
        console.log("✅ Task added:", formatTask(task));
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
            console.log("✅ Task completed:", formatTask(task));
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
            console.log("🗑️ Task deleted:", formatTask(task));
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



/* From down here there is  model of the first prototype */

/*
// ADD TASK

addTask("Learn JS")
addTask("Become a software engineer")
addTask("Improve my german")
addTask("Study hard next year")

// SHOW ALL TASK
divider()
console.log("TASK LIST:")
listTasks().forEach(task => console.log(formatTask(task)))

// COMPLETE A TASK
divider()
console.log("Completing task #2...")
completeTask(2)

// SHOW UPDATED LIST
divider()
console.log("Updated List:")
listTasks().forEach(task => console.log(formatTask(task)))

// Completing task 4...
divider()
console.log("Completing task #4...")
completeTask(4)

// SHOW UPDATED LIST
divider()
console.log("Updated List:")
listTasks().forEach(task => console.log(formatTask(task)))
*/