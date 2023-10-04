#!/bin/bash

git fetch origin main &&  AFFECTED=git diff origin/main..HEAD --name-only -- tests-examples/ >> $GITHUB_ENV && echo AFFECTED
