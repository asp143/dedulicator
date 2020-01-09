const fs = require('fs');

const { writeFile, moveFile, dedupe } = require('./utils/utils');

const testFolder = './data/';

const folderReader = () => {
    console.log('Reading data folder...');
    fs.readdir(testFolder, (err, files) => {
        if (err) throw err;
        
        if (files.length > 0) {
            for (const file of files) {
                console.log(`File found! Now processing: ${file}`);
                const jsonFile = JSON.parse(fs.readFileSync(`data/${file}`, 'utf8'));
                const cleanData = dedupe(jsonFile);
                writeFile(`clean data/${file}`, cleanData);
                moveFile(`data/${file}`, `done data/${file}`);
                console.log(`Process done...`);
                console.log(`Good bye...`);
            }
        } else {
            console.log('data folder is empty...');
            console.log('Good bye..');
        }
    });
};

folderReader();

module.exports = dedupe;