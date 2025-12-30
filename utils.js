// HELPER FUNCTIONS

import chalk from "chalk";

// How the tasks list will be displayed on the console
export function formatTask(task) {
    if (task.completed) {
        return chalk.green(`[✔] ${task.id}: ${task.title}`)
    } else {
        return `[ ] ${task.id}: ${task.title}`
    }
    // return `[${task.completed ? "✔" : " "}] ${task.id}: ${task.title}`
}

export default function divider() {
    console.log("=".repeat(20))
}


// How the banner will be displayed
const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[0m",
};
export function banner(text, col) {
    console.log(colors[col]);
        console.log("╔" + "═".repeat(60) + "╗");
        console.log("║ " + colors.reset + text.padEnd(59) + colors[col] + "║");
        console.log("╚" + "═".repeat(60) + "╝" + colors.reset);
        console.log("")
}

export function displayHelpInstructions() {
    console.log("   tsk [command] [<options>/arguments]");
    console.log("")
    console.log(chalk.green("COMMANDS:"));
    console.log("   add \"Task description\"");
    console.log("   list");
    console.log("   complete <taskId>");
    console.log("   delete <taskId>");
    console.log("   clear");
    console.log("   help");
}