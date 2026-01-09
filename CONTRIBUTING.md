# Contributing to Task Manager CLI

Thank you for considering contributing to Task Manager CLI! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project aims to provide a welcoming and inclusive environment for all contributors. Please be respectful and considerate in all interactions.

## How Can I Contribute?

### Types of Contributions

- **Bug Fixes**: Fix issues reported in the GitHub Issues
- **New Features**: Add new functionality to the task manager
- **Documentation**: Improve README, comments, or create new documentation
- **Tests**: Add test cases to improve code coverage
- **Code Quality**: Refactor code, improve performance, or enhance error handling

## Development Setup

### Prerequisites

- Node.js v18 or higher
- npm (comes with Node.js)
- Git

### Setting Up Your Development Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Task-Manager-Node.git
   cd Task-Manager-Node
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Leonardo-Garzon-1995/Task-Manager-Node.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Link the package locally (optional)**
   ```bash
   npm link
   ```

6. **Verify the setup**
   ```bash
   tsk help
   # or
   node bin/main.js help
   ```

### Staying Up to Date

Before starting work, sync your fork with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

## Project Structure

```
Task-Manager-Node/
├── bin/
│   └── main.js          # CLI entry point with shebang
├── json_to_csv/
│   ├── csv_serializer.js # CSV export functionality
│   ├── main.js          # CSV conversion entry point
│   └── tasks.csv        # Generated CSV file
├── tasks.js             # Core task management functions
├── utils.js             # Utility functions
├── test.js              # Test file
├── tasks.json           # Task storage (generated)
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
├── LICENSE              # MIT License
└── CONTRIBUTING.md      # This file
```

### Key Files

- **tasks.js**: Contains core functions (`addTask`, `listTasks`, `completeTask`, `deleteTask`, `clearTasks`)
- **bin/main.js**: CLI interface that parses commands and calls task functions
- **utils.js**: Helper functions for formatting and display
- **package.json**: Defines the `tsk` command and dependencies

## Coding Standards

### JavaScript Style

- **ES Modules**: Use `import`/`export` syntax (project uses `"type": "module"`)
- **Indentation**: Use 4 spaces for indentation
- **Naming Conventions**:
  - Use camelCase for variables and functions
  - Use UPPER_CASE for constants
  - Use descriptive names that convey purpose
- **Comments**: Add comments for complex logic, but prefer self-documenting code
- **Error Handling**: Use try-catch blocks and provide meaningful error messages

### Example Code Style

```javascript
// Good
export function addTask(title) {
    const tasks = loadTasks();
    const task = { 
        id: nextId(tasks),
        title,
        completed: false
    };
    
    tasks.push(task);
    saveTasks(tasks);
    return task;
}

// Avoid
export function addTask(title){const tasks=loadTasks();const task={id:nextId(tasks),title,completed:false};tasks.push(task);saveTasks(tasks);return task;}
```

### File Organization

- Keep functions focused and single-purpose
- Export only necessary functions
- Group related functionality together
- Maintain consistent file structure

## Commit Guidelines

### Commit Message Format

Follow the conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```
feat(tasks): add task priority levels

Added ability to assign priority (low, medium, high) to tasks.
Priority is displayed when listing tasks.

Closes #15
```

```
fix(delete): handle invalid task ID gracefully

Previously crashed when attempting to delete non-existent task ID.
Now displays appropriate error message.

Fixes #23
```

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow the coding standards
   - Add comments where necessary
   - Update documentation if needed

3. **Test your changes**
   ```bash
   # Test the CLI functionality
   tsk add "Test task"
   tsk list
   tsk complete 1
   tsk delete 1
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Provide a clear title and description
   - Reference any related issues

### Pull Request Checklist

- [ ] Code follows the project's coding standards
- [ ] Changes are tested and working
- [ ] Documentation is updated (README, comments, etc.)
- [ ] Commit messages follow the commit guidelines
- [ ] No merge conflicts with main branch
- [ ] Branch is up to date with upstream main

## Reporting Bugs

### Before Submitting a Bug Report

1. Check the existing issues to avoid duplicates
2. Ensure you're using the latest version
3. Verify the bug is reproducible

### How to Submit a Bug Report

Create an issue with the following information:

**Title**: Brief description of the bug

**Description**:
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

**Environment**:
- OS: [e.g., Windows 11, macOS 13, Ubuntu 22.04]
- Node.js version: [e.g., v18.16.0]
- Package version: [e.g., v1.0.0]

**Example**:

```markdown
## Bug Description
Task deletion doesn't work when task ID contains special characters

## Steps to Reproduce
1. Add a task: `tsk add "Test task"`
2. Try to delete using: `tsk delete 1`
3. Error occurs: ...

## Expected Behavior
Task should be deleted successfully

## Actual Behavior
Error message: "Cannot delete task"

## Environment
- OS: Windows 11
- Node.js: v18.16.0
- Package: v1.0.0
```

## Suggesting Enhancements

### Before Submitting an Enhancement

1. Check if the enhancement already exists in issues
2. Consider if it fits the project's scope and goals

### How to Submit an Enhancement

Create an issue with:

**Title**: Brief description of the enhancement

**Description**:
- Detailed explanation of the enhancement
- Use cases and benefits
- Possible implementation approach (optional)
- Examples or mockups (if applicable)

**Example**:

```markdown
## Enhancement Idea
Add task categories/tags

## Description
Allow users to assign categories or tags to tasks for better organization.

## Use Case
Users with many tasks could filter by category (e.g., "work", "personal", "urgent")

## Proposed Implementation
- Add `category` field to task object
- Add `--category` flag to `add` command
- Add `filter` command to list tasks by category

## Example Usage
```bash
tsk add "Finish report" --category work
tsk filter work
```
```

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Reach out to the project maintainer

Thank you for contributing to Task Manager CLI! 🎉
