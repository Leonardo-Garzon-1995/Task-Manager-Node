// HELPER FUNCTIONS

// How the tasks list will be displayed on the console
export function formatTask(task) {
    return `[${task.completed ? "✔" : " "}] ${task.id}: ${task.title}`
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
        console.log("╔" + "=".repeat(60) + "╗");
        console.log("║ " + colors.reset + text.padEnd(59) + colors[col] + "║");
        console.log("╚" + "═".repeat(60) + "╝" + colors.reset);
}