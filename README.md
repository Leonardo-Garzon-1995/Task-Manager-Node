# TASK MANAGER CLI

A simple command-line task manager built with Node.js (ES Modules).
You can add tasks, list them, mark them as complete and delete them directly from your terminal.
Tasks are stored in a local JSON file (tasks.json) so your list persists between sessions.

## 1. FEATURES

- Add new tasks with a title.

- List all tasks (with status: complete or incomplete).

- Mark tasks as completed by ID.

- Delete individual tasks by ID.

- Clear all tasks.

- Tasks are saved in tasks.json for persistence.

## 2. INSTALLATION

1. Make sure you have Node.js v18+ installed.
    ```bash
    node -v
    ```

2. Clone or download this repository.
    ```bash
    git clone https://github.com/Leonardo-Garzon-1995/Task-Manager-Node.git
    cd task-manager-node
    ```

3. Initialize dependencies
    ```bash
    npm init -y
    ```

4. Install dependencies
    ```bash
    npm install 
    ```
5. link the package globally (optional) - allows you to run `tsk` command globally
    ```bash
    npm link
    ```


## 3. USAGE

### Option A: Using the global command "`tsk`" (if linked)
1. Run commands using:
    ```bash
    tsk <command> [arguments]
    ```
2. Add a task
    ```bash
        tsk add "Learn a new language"
    ```
3. List all tasks
    ```bash
    tsk list
    ```
4. Mark as complete
    ```bash
    tsk complete 1
    ```
5. Delete a task
    ```bash
    tsk delete 1
    ``` 
6. Clear all tasks
    ```bash
    tsk clear
    ```
7. Show help
    ```bash
    tsk help
    ```

### Option B: Using node or npm directly

1. Run commands using:
    ```bash
    node main.js <command> [arguments]
    ```
    or use npm script:
    ```bash
    npm run <command> [arguments]
    ```
2. Add a task
    ```bash
        node main.js add "Learn a new language"
    ```
    or use npm script:
    ```bash
        npm run add "Learn a new language"
    ```
3. List all tasks
    ```bash
    node main.js list
    ```
    or use npm script:
    ```bash
    npm run list
    ```
4. Mark as complete
    ```bash
    node main.js complete 1
    ```
    or use npm script:
    ```bash
    npm run complete 1
    ```
5. Delete a task
    ```bash
    node main.js delete 1
    ```
    or use npm script:
    ```bash
    npm run delete 1
    ```
6. Clear all tasks
    ```bash
    node main.js clear
    ```
    or use npm script:
    ```bash
    npm run clear
    ```
7. Show help
    ```bash
    node main.js help
    ```
    or use npm script:
    ```bash
    npm run help
    ```


## 4. HOW IT WORKS

1. main.js → Reads CLI arguments (process.argv), determines the command, and calls functions.

2. tasks.js → Handles loading/saving tasks in tasks.json and the logic behind each command.

3. utils.js → Handles formatting and pretty-printing tasks.

4. tasks.json → Stores your tasks persistently in JSON format.

## CONTRIBUTING
Feel free to fork the repository and submit pull requests. Check out the [contribution]() guide.
    

By Leoanrdo Garzon.