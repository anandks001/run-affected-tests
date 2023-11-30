(async () => {
    let files = [];
    files = process.argv
    if (files.length === 0) {
        throw new Error('No affected files found');
    }

    console.log(files);



    // const deepList = (await Promise.all(Object.values(Project).map((project) => {
    //     return getTenantItems(project, framework);
    // }))).flat().filter(Boolean);

    // setMatrixOutput({include: deepList});
})().catch((error) => {
    console.log(error);
    process.exit(1);
});