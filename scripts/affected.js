const { execSync } = require('node:child_process');


const PROJECT_PATH = 'tests-examples/';


(() => {
    const files = execSync(`git diff main --name-only ${PROJECT_PATH}`).toString().split('\n').slice(0, -1);
    // const component = files.split('tests-examples');

    const components = files.map((path) => { return path.split(`${PROJECT_PATH}`)[1].split('/')[0].concat('/') }).join(' ');
    console.log(components);
    execSync(`echo ::set-output name=files::${components}`);
})();