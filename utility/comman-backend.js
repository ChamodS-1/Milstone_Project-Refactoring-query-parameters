const fs = require('fs');
const path = require('path');

const data = path.join(__dirname,'..','data','details.json');

function reading(){

    const readFile = fs.readFileSync(data);
      const newRead=JSON.parse(readFile);
      return newRead;
}

function writing(newFile){

    fs.writeFileSync(data,JSON.stringify(newFile));

}

module.exports = {

    reading:reading,
    writing:writing
}