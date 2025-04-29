/* 
JS Basics
// Variables

// Data Types

// Functions

// Conditionals

// Loops

// Arrays

// Objects

// ES6 Features

// Promises & Async/Await

// DOM Manipulation

// Classes

*/

//????
//test file to work on git rebase
//git checkout main
//git pull
//git checkout branch
//git rebase main
// git push -f



//making a branch
//git checkout -b branchName 
//git add .
//git commit -m "message"
//git push origin branchName
//git checkout main

/*
// on vscode
// steps to rebasing
//git checkout -b branchName
//git add .
//git commit -m "message"
//git push origin branchName

// on github
//go to pull request
//click on pull request
//click on compare
//click on create pull request
//click on merge

// on new branch in vscode
// git checkout -b newBranch
// git add .
// git commit -m "message"
// git push origin newBranch

// on github
// go to pull request
// click on pull request
// click on compare
// click on create pull request
// resolve conflicts

// on vscode
// git checkout main
// git pull
// git checkout branchName
// git rebase main
// git rebase --continue
// git push -f

*/

/* Basic Git Commands
# Initialize a new Git repository
git init

# Clone a repository
git clone <repository-url>

# Check the status of your working directory
git status

# Add changes to the staging area
git add <file>          # Add a specific file
git add .               # Add all changes

# Commit changes
git commit -m "Commit message"

# View commit history
git log
git log --oneline        # Compact view
*/

/* Branching and Merging
# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# Merge a branch into the current branch
git merge <branch-name>

# Delete a branch
git branch -d <branch-name>       # Safe delete (only if merged)
git branch -D <branch-name>       # Force delete
*/

/* Remote Repositories
# Add a remote repository
git remote add origin <repository-url>

# Fetch changes from the remote repository
git fetch

# Pull changes from the remote repository and merge
git pull

# Push changes to the remote repository
git push
git push -u origin <branch-name>  # Set upstream branch
*/

/* Rebasing
# Rebase your branch onto another branch
git rebase <branch-name>

# Abort a rebase
git rebase --abort

# Continue a rebase after resolving conflicts
git rebase --continue
*/

/* Stashing
# Stash changes
git stash

# List stashes
git stash list

# Apply the most recent stash
git stash apply

# Apply and drop the most recent stash
git stash pop
/*

/* Undoing Changes
# Unstage a file
git reset <file>

# Undo the last commit (keep changes in working directory)
git reset --soft HEAD~1

# Undo the last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (create a new commit that undoes changes)
git revert <commit-hash>
*/

/* Viewing Differences
# Show changes in the working directory
git diff

# Show changes between commits
git diff <commit-hash1> <commit-hash2>
*/

/* Tags
# Create a tag
git tag <tag-name>

# Push tags to remote
git push origin <tag-name>
git push --tags
*/

/* Cleaning Up
# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd
*/

/* Collaboration
# Check out a pull request locally
git fetch origin pull/<PR-number>/head:<branch-name>
git checkout <branch-name>
*/