#!/bin/bash

git fetch origin main
#!/bin/bash

# Get the list of changed files in the pull request
changed_files=$(git diff origin/main..HEAD --name-only -- tests-examples/)

# Define a pattern to match component files (adjust as needed)
component_pattern=".*/src/.*\.js"

# Extract the affected components
affected_components=()

for file in $changed_files; do
  if [[ $file =~ $component_pattern ]]; then
    # Extract the component name from the file path (adjust as needed)
    component_name=$(echo "$file" | sed -n 's|.*/src/\(.*\)\.js|\1|p')
    affected_components+=("$component_name")
  fi
done

# Deduplicate the list of affected components
affected_components=($(echo "${affected_components[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))

# Print the list of affected components
echo "${affected_components[@]}"


