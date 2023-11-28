#!/bin/bash

# Get the list of changed files in the pull request
changed_files=$(git diff --name-only ${{ github.event.before }} ${{ github.sha }})

# Print the list of affected file names
echo "${changed_files[@]}"