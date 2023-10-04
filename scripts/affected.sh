#!/bin/bash

git fetch origin main
AFFECTED=$(git diff origin/main..HEAD --name-only -- tests-examples/)
arr=(`echo ${AFFECTED}`)
for s in "${arr[@]}"; do
    echo "$s"
done
echo "AFFECTED_FILES=${arr}" >> $GITHUB_ENV
echo "After setting env"
echo "${AFFECTED_FILES}"
