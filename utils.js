export function formatTask(task) {
    return `[${task.completed ? "✔" : " "}] ${task.id}: ${task.title}`
}

export default function divider() {
    console.log("=".repeat(20))
}