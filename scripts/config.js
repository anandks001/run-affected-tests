
const createConfig = async () => {

    const checkSpecsInE2eRange = () => {
        return true
    };

    return {
        'demo-todo-app.spec.js': true && checkSpecsInE2eRange(['test1']),

    };
};

module.exports=createConfig;
