// HELPER FUNCTIONS

// How the tasks list will be displayed on the console
export function formatTask(task) {
    return `[${task.completed ? "✔" : " "}] ${task.id}: ${task.title}`
}

export default function divider() {
    console.log("=".repeat(20))
}