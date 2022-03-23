const { hardhat } = require("hardhat");
const fs = require('fs'); 

let AWS = require('aws-sdk')
const path = require('path')
const dirPath = path.join(__dirname, '/deployParams.json')
let rawdata = fs.readFileSync(dirPath); 
const params = JSON.parse(rawdata);
console.log(params.name);

async function main() {
  var myGovernorAddr=params.myGovernorAddr;
  try {
    await run("verify:verify", {
      address: myGovernorAddr ,
      contract: "contracts/MyGovernor.sol:MyGovernor",
    });
  } catch (error) {
    console.log("error:", error.toString());
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });