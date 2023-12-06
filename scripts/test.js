(async () => {
    let files = [];
    files = process.argv
    if (files.length === 0) {
        throw new Error('No affected files found');
    }
    console.log('files:', files);

    for(let i = 2; i < files.length ; i++){
        console.log(files[i].split('/')[1]+ '/');
    }
})().catch((error) => {
    console.log(error);
    process.exit(1);
});