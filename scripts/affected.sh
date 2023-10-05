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
test="Iamtesting"
echo "AFFECTED_FILES=$test" >> $GITHUB_ENV

