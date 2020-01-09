const fs = require('fs');
const _ = require('lodash');

/**
 * Writes a file on the directory path provided
 * @param {String} directory 
 * @param {Object} data 
 */
const writeFile = (directory, data) => {
    console.log('Writing file....');
    fs.writeFile(directory, JSON.stringify(data), (err) => {
        if (err) console.log(err);
        console.log('File saved');
    })
};

/**
 * takes in a object then removes any duplicate data on that object
 * @param {Object} dirtyObject 
 */
const dedupe = (dirtyObject) => {
    console.log('Data length: ' + dirtyObject.length);
    const cleanObject = _.uniqWith(dirtyObject, _.isEqual);
    console.log('Clean Object length: ' + cleanObject.length);
    return cleanObject;
};

/**
 * Moves a file from the directory providev to the new one
 * @param {String} oldPath
 * @param {String} newPath
 */
const moveFile = (oldPath, newPath) => {
    console.log(`Now moving the dirty data...`);
    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log('Moved file...');
    });
}
module.exports = {
    writeFile,
    dedupe,
    moveFile
};
