#!/usr/bin/env node
import TasksCommands from "../src/TasksCommands.js";
import { displayHelpInstructions } from "../src/utils.js";


const [,, command, ...args] = process.argv

function main() {
    const id = parseInt(args[0], 10);
    const title = args.join(" ")
    const updateTitle = args.slice(1).join(" ");

    switch (command) {
        case "-a":
        case "a":
        case "add": 
            TasksCommands.add(title)
            break;
        case "-l":
        case "ls":
        case "list":  // command: list - it shows the updated list
            TasksCommands.list()
            break;
        case "-c":
        case "c":
        case "complete":   //command: complete # - it shows which task has been completed
            TasksCommands.complete(id)
            break;
        case "-d":
        case "d":
        case "delete": // command: delete # - deletes the selected task
            TasksCommands.delete(id)
            break;
        case "clear": 
            TasksCommands.clear()
            break;
        case "-u":
        case "u":
        case "update":
            TasksCommands.update(id, updateTitle)
            break;
        case "-h":
        case "help":  // command: help - it shows the help instructions
            displayHelpInstructions();
            break;

        default: // command: list - it shows the updated list
            TasksCommands.list()
            break;

    }
}

main();