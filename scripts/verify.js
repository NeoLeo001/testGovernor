const { hardhat } = require("hardhat");
const fs = require('fs'); 

let AWS = require('aws-sdk')
const path = require('path')
const dirPath = path.join(__dirname, '/deployParams.json')
let rawdata = fs.readFileSync(dirPath); 
const params = JSON.parse(rawdata);
console.log(params.name);

async function main() {
<<<<<<< HEAD
  var myGovernorAddr=params.myGovernorAddr;
  try {
    await run("verify:verify", {
      address: myGovernorAddr ,
      contract: "contracts/MyGovernor.sol:MyGovernor",
=======

  try {
    await run("verify:verify", {
      address: params.myTokenAddr ,
      contract: "contracts/MyToken.sol:MyToken",
>>>>>>> 4fc7e3ea7971fba48525a2d5ae2960d3f127994a
    });
  } catch (error) {
    console.log("error:", error.toString());
  }
<<<<<<< HEAD
=======

>>>>>>> 4fc7e3ea7971fba48525a2d5ae2960d3f127994a
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });