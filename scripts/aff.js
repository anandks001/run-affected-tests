const exec = require('child_process').exec;

PROJECT_EXAMPLE = require('./env').default;

(() => {
    exec(`echo "AFFECTED_PROJECT='/tests-examples'" >> $GITHUB_ENV`)
})
