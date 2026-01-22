// HELPER FUNCTIONS

import chalk from "chalk";

// How the tasks will be displayed on the console
export function formatTask(task) {
    if (task.completed) {
        return chalk.green(`[✔] ${task.id}. ${task.title}`)
    } else {
        return `[ ] ${task.id}. ${task.title}`
    }
}

export default function divider() {
    console.log("═".repeat(25))
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
    brightred: "\x1b[91m",
    brightgreen: "\x1b[92m",
    brightyellow: "\x1b[93m",
    brightblue: "\x1b[94m",
    brightmagenta: "\x1b[95m",
    brightcyan: "\x1b[96m",
    reset: "\x1b[0m",
};
export function banner(text, col) {
    console.log(colors[col]);
        console.log("╔" + "═".repeat(40) + "╗");
        console.log("║ " + colors.reset + text.padEnd(39) + colors[col] + "║");
        console.log("╚" + "═".repeat(40) + "╝" + colors.reset);
        console.log("")
}

// Help instructions
export function displayHelpInstructions() {
    console.log("")
    console.log(`   ${chalk.yellow("tsk")} [command] [<options>/arguments]`);
    console.log("")
    console.log(chalk.green("   COMMANDS:"));
    console.log("       add \"Task description\"");
    console.log("       list");
    console.log("       complete <taskId>");
    console.log("       delete <taskId>");
    console.log("       update <taskId> \"New Task description\"");
    console.log("       clear");
    console.log("       help");
}