const fs = require('fs');
require('dotenv').config();

const { 
    dedupe,
    moveFile, 
    writeFile, 
} = require('./utils/utils');
const {
    OUT_DIR,
    TEST_FOLDER,
    FINISHED_FOLDER,
} = require('./constant/constants');

const folderReader = () => {
    console.log('Reading data folder...');
    fs.readdir(TEST_FOLDER, (err, files) => {
        if (err) throw err;
        
        if (files.length > 0) {
            for (const file of files) {
                console.log(`File found! Now processing: ${file}`);
                const jsonFile = JSON.parse(fs.readFileSync(`${TEST_FOLDER}/${file}`, 'utf8'));
                const cleanData = dedupe(jsonFile);
                writeFile(`${OUT_DIR}/${file}`, cleanData);
                moveFile(`${TEST_FOLDER}/${file}`, `${FINISHED_FOLDER}/${file}`);
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