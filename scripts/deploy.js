<<<<<<< HEAD
=======
const { hardhat } = require("hardhat");
>>>>>>> 4fc7e3ea7971fba48525a2d5ae2960d3f127994a
const fs = require('fs'); 
let AWS = require('aws-sdk')
const path = require('path')

const dirPath = path.join(__dirname, '/deployParams.json')
let rawdata = fs.readFileSync(dirPath);
var params = JSON.parse(rawdata); 

<<<<<<< HEAD

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
=======
console.log(params.name);

async function main() {
  const [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Account balance:", (await deployer.getBalance()).toString());
>>>>>>> 4fc7e3ea7971fba48525a2d5ae2960d3f127994a
  

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();
  const myTokenAddr = myToken.address;
  console.log("myToken address:", myTokenAddr);
  await myToken.deployed();
  params.myTokenAddr=myTokenAddr;


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
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });