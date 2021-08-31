const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(9, 'd').format();

const data = {
  date: DATE
};

jsonfile.writeFile(FILE_PATH, data, (err) => {
  if (err) {
    console.error('Error writing to data.json:', err);
  } else {
    console.log('Data written to data.json successfully.');
  }
});

simpleGit()
  .add([FILE_PATH])
  .commit(DATE, { '--date': DATE })
  .push();
                         