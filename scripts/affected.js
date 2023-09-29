const { exec } = require('node:child_process');


const PROJECT_PATH = 'tests-examples';

const components = (files) => {
    const temp = files.map((path) => { return path.split(`${PROJECT_PATH}`)[1].split('/')[0].concat('/') }).join(' ');
    console.log(temp);

    return temp;
}


(() => {
    const files = exec(`git diff main --name-only -- ${PROJECT_PATH}`).toString().split('\n').slice(0, -1);
    components(files);
    exec(`echo "AFFECTED=${components(files)}" >> $GITHUB_ENV`);
})();