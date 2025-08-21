import { addTask, listTasks, completeTask } from "./tasks.js";

import divider, { formatTask } from "./utils.js";

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