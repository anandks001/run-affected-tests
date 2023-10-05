#!/bin/bash

git fetch origin main
AFFECTED=$(git diff origin/main..HEAD --name-only -- tests-examples/)
arr=(`echo ${AFFECTED}`)
for s in "${!arr[@]}"; do
    component=${arr[$s]#tests-examples/}
    arr[$s]=${component%/*}/
done

FILES=${arr[@]}
echo "$FILES"
echo "AFFECTED_FILES=$FILES" >> $env.GITHUB_ENV

