#!/bin/bash

git fetch origin main &&  git diff origin/main..HEAD --name-only -- tests-examples/ > mydiff && echo "mydiff = " && cat mydiff
