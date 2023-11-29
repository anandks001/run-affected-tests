#!/bin/bash

# Get the list of changed files in the pull request
git fetch origin main
changed_files=$(git diff origin/main..HEAD --name-only -- tests-examples/)

# Print the list of affected file names
echo "${changed_files[@]}"

node ./test.js ${changed_files}