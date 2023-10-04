#!/bin/bash

git fetch origin main && git diff origin/main..HEAD --name-only -- tests-examples/ > affected && echo affected
