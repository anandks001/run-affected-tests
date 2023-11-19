const exec = require('node:child_process');

PROJECT_EXAMPLE = require('./env').default;

(() => {
    exec(`echo "AFFECTED_PROJECT='/tests-examples'" >> $GITHUB_ENV`)
})
