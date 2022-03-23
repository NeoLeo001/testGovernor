const fs = require('fs'); 
let AWS = require('aws-sdk')
const path = require('path')

const dirPath = path.join(__dirname, '/deployParams.json')
let rawdata = fs.readFileSync(dirPath);
var params = JSON.parse(rawdata); 


async function main () {
    // We get the contract to deploy
    const MyGovernor = await ethers.getContractFactory('MyGovernor');
    console.log('Deploying MyGovernor...');
    const myGovernor = await MyGovernor.deploy();
    await myGovernor.deployed();
    console.log('myGovernor deployed to:', myGovernor.address);
    params.myGovernorAddr=myGovernor.address;

    try {
      console.log("params:",params);
      const data = JSON.stringify(params, null, 4);
      fs.writeFileSync(dirPath, data);
      console.log("JSON data is saved.");
    } catch (error) {
      console.error(err);
    }
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });