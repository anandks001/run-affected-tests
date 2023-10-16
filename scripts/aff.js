const exec = require('node:child_process');

PROJECT_EXAMPLE = require('./env');

(() => {
    exec(`echo "AFFECTED_PROJECT=${PROJECT_EXAMPLE}" >> $GITHUB_ENV`)
})
