const { execSync } = require('node:child_process');


const PROJECT_PATH = 'tests-examples';

const components = (files) => {
    const temp = files.map((path) => { return path.split(`${PROJECT_PATH}`)[1].split('/')[0].concat('/') }).join(' ');
    console.log(temp);

    return temp;
    // execSync('git fetch origin main' && 'echo "git diff origin/main..HEAD --name-only -- tests-examples/" >> diff_files')
}


const files = () => {
    return execSync('git diff --name-only master...HEAD').toString().split('\n');
}

(() => {
    const files = files();
   exec(`AFFECTED=${files} >> $GITHUB_ENV`)
})();