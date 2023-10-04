const { execSync, exec } = require('node:child_process');


const PROJECT_PATH = 'tests-examples';

const components = (files) => {
    const temp = files.map((path) => { return path.split(`${PROJECT_PATH}`)[1].split('/')[0].concat('/') }).join(' ');
    console.log(temp);

    return temp;
    // execSync('git fetch origin main' && 'echo "git diff origin/main..HEAD --name-only -- tests-examples/" >> diff_files')
}


// const files = () => {
//     exec('echo "I am calling the function"')
//     return exec('git fetch origin main && git diff origin/main... --name-only -- tests-examples/');
// }

(() => {
    const aff = execSync('git fetch origin main && git diff origin/main... --name-only -- tests-examples/');
    execSync(`AFFECTED=${aff} >> $GITHUB_ENV`)
})();