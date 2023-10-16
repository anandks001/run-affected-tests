#!/bin/bash

git fetch origin main
AFFECTED=$(git diff origin/main..HEAD --name-only -- tests-examples/)
components=(`echo ${AFFECTED}`)
for s in "${!components[@]}"; do
    component=${arr[$s]#tests-examples/}
    components[$s]=${component%/*}/
done

FILES=${components[@]}
echo "$FILES"
echo "AFFECTED_FILES=$FILES" >> $GITHUB_ENV
echo "$AFFECTED_PROJECT"

