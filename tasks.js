let tasks = []

export function addTask(title) {
    const task = { 
        id: tasks.length + 1,
        title,
        completed: false
    }

    tasks.push(task)
    return task
}

export function listTasks() {
    return tasks
}

export function completeTask(id) {
    const task = tasks.find(t => t.id === id)

    if (task) {
        task.completed = true
        return task
    }
    return null
}