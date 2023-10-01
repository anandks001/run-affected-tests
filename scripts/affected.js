const { exec } = require('node:child_process');


const PROJECT_PATH = 'tests-examples';

const components = (files) => {
    const temp = files.map((path) => { return path.split(`${PROJECT_PATH}`)[1].split('/')[0].concat('/') }).join(' ');
    console.log(temp);

    return temp;
}


(() => {
    exec('git fetch origin main && echo "git diff origin/main..HEAD --name-only -- tests-examples/" > mydiff')
})();