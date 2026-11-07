#!/usr/bin/env node
import chalk from "chalk";
import { ApiError } from "../src/errors.js";
import TasksCommands from "../src/TasksCommands.js";
import { displayHelpInstructions } from "../src/utils.js";


const [,, command, ...args] = process.argv

function consoleErrorMessage(error) {
    if (error.status === undefined) return "Can't reach the task server. Check your connection and TSK_API_URL."
    if (error.status === 500) return "The server had a problem. Try again in a moment.";
    if (error.status === 401) return "The server rejected your API key. Check apiKey in your tsk config.";
    
    return error.message
}

async function  main() {
    const [first, ...rest] = args

    switch (command) {
        case "-a":
        case "add": 
            return TasksCommands.add(args.join())
        case undefined:
        case "-l":
        case "list":  // command: list - it shows the updated list
            return TasksCommands.list()
        case "-c":
        case "complete":   //command: complete # - it shows which task has been completed
            return TasksCommands.complete(first)
        case "-d":
        case "delete": // command: delete # - deletes the selected task
            return TasksCommands.delete(first)
        case "-u":
        case "update":
            return TasksCommands.update(first, rest.join(" "))
        case "-h":
        case "help":  // command: help - it shows the help instructions
            return displayHelpInstructions();

        default: // command: list - it shows the updated list
            console.error(chalk.red(`❌ Unknown command: ${command}`))
            displayHelpInstructions()
            process.exitCode = 1

    }
}

main().catch((error) => {
    console.error(chalk.red(`❌ ${error instanceof ApiError ? consoleErrorMessage(error) : "Unexpected error"}`))
    if (process.env.TSK_DEBUG) console.error(error)
    process.exitCode = 1
}) 