TASK MANAGER CLI

A simple command-line task manager built with Node.js (ES Modules).
You can add tasks, list them, mark them as complete and delete them directly from your terminal.
Tasks are stored in a local JSON file (tasks.json) so your list persists between sessions.

1. FEATURES
    ✅ Add new tasks with a title.

    📋 List all tasks (with status: complete or incomplete).

    ✔ Mark tasks as completed.

    🗑️Delete them.

    💾 Tasks are saved in tasks.json for persistence.

    🔧 Beginner-friendly code structure using     modernimport/export syntax.

    🖌️ Color coded with 'chalk' npm

2. PROJECT STRUCTURE
    task-manager-node/
    │── main.js         # Entry point (handles CLI commands)
    │── tasks.js        # Task management (add, list, complete)
    │── utils.js        # Helper functions (formatter + divider)
    │── tasks.json      # Stores the tasks (auto-created if missing)
    │── package.json    # Project metadata

3. INSTALLATION
    1. Make sure you have Node.js v18+ installed.
        node -v
    2. Clone or download this repository.
        git clone https://github.com
        cd task-manager-node
    3. Initialize dependencies
        npm init -y

4. USAGE
    1. Run commands using:
            node main.js <command> [arguments]
    2. Add a task
            node main.js add "Learn a new language"
        OUTPUT
            Task added: [ ] 1: Learn a new language
    3. List all tasks
            node main.js list
        OUTPUT
            ====================
            📋 TASK LIST:
            [ ] 1: Learn a new language
            [✔] 2: Practice cooking
            [ ] 3: Learn how to write code
    4. Mark as complete
            node main.js complete 1
        OUTPUT
            Task completed: [✔] 1: Learn a new language
    5. Delete a task
            node main.js delete 1
        OUTPUT
            Task deleted: [ ] 1: Learn a new language

5. HOW IT WORKS
    1. main.js → Reads CLI arguments (process.argv), determines the command, and calls functions.

    2. tasks.js → Handles loading/saving tasks in tasks.json.

    3. utils.js → Handles formatting and pretty-printing tasks.

    4. tasks.json → Stores your tasks persistently in JSON format.

6. EXAMPLE WORKFLOW
    INPUT
        node main.js add "Go for a run"
        node main.js add "Read a book"
        node main.js list
        node main.js complete 2
        node main.js list
    OUTPUT
        ✅ Task added: [ ] 1: Go for a run
        ✅ Task added: [ ] 2: Read a book
        ====================
        📋 TASK LIST:
        [ ] 1: Go for a run
        [ ] 2: Read a book
        ✅ Task completed: [✔] 2: Read a book
        ====================
        📋 TASK LIST:
        [ ] 1: Go for a run
        [✔] 2: Read a book

7. FUTURE IMPROVEMENTS
    ✏️ Edit task titles.

    📆 Add due dates & priorities.

    🌐 Build a web-based version.
    

AUTHOR: Built with Node.js by Leoanrdo Garzon.