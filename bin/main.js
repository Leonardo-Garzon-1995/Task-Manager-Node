#!/usr/bin/env node

import { addTask, listTasks, completeTask, deleteTask, clearTasks, updateTask } from "../tasks.js";

import divider, { formatTask, banner, displayHelpInstructions } from "../utils.js";

import chalk from "chalk";

const [,, command, ...args] = process.argv

function main() {

    switch (command) {
        case "add": {   //command: add "write a task "
            const title = args.join(" ")
            if (!title) {
                console.log("❌ Please provide a task title.")
                break
            }
            const task = addTask(title);
            console.log("✅ Task added:", chalk.cyan(formatTask(task)));
            break;
        }

        case "list": {  // command: list - it shows the updated list
            const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightred", "brightgreen", "brightyellow", "brightblue", "brightmagenta", "brightcyan", "reset"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            banner("TASK LIST", randomColor);

            listTasks().forEach(task => console.log(formatTask(task)));
            console.log("");
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
                console.log("✅ Task completed:", chalk.green(formatTask(task)));
            } else {
                console.log(chalk.red("❌ Task not found."));
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
                console.log(chalk.red("🗑️ Task deleted:", formatTask(task)));
            } else {
                console.log("❌ Task not found.");
            }
            break;
        }

        case "clear": {   // command: clear - it clears the tasks list
            clearTasks();
            console.log("✅ Tasks list cleared.");
            break;
        }

        case "update": {
            const id = parseInt(args[0], 10);
            if (isNaN(id)) {
                console.log("❌ Please provide a valid task ID.");
                break;
            }
            const title = args.slice(1).join(" ");
            if (!title) {
                console.log("❌ Please provide a task title.");
                break;
            }
            const task = updateTask(id, title);
            if (task) {
                console.log("✅ Task updated:", chalk.cyan(formatTask(task)));
            } else {
                console.log("❌ Task not found.");
            }
            break;
        }

        case "help": {   // command: help - it shows the help instructions
            displayHelpInstructions();
            break;
        }

        default:
            console.log(chalk.red("❌ Unknown command. Use:"));
            displayHelpInstructions();
            break;

    }
}

main();