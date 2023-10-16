const exec = require('node:child_process');

PROJECT_EXAMPLE = require('./env').default;

(() => {
    exec(`echo "AFFECTED_PROJECT=${PROJECT_EXAMPLE}" >> $GITHUB_ENV`)
})
