testGovernor Hardhat Project
=======================

npm install @openzeppelin/contracts  
npm install --save-dev hardhat
npm install --save-dev "@nomiclabs/hardhat-ethers@^2.0.0
npm install --save-dev @nomiclabs/hardhat-etherscan
npm install web3  
<!-- npm install @chainlink/contracts --save   -->
npm i @nomiclabs/ethereum-waffle@^3.2.0   
 npm i ethereum-waffle
npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@\^5.0.0'   
npm install --dotenv-extended  
npm i hardhat-gas-reporter   
npm i solidity-coverage   
npm i fs   
npm i aws-sdk

<!-- deploy and verify contracts -->
npx hardhat clean   
npx hardhat run --network rinkeby scripts/deploy.js  
npx hardhat run --network rinkeby scripts/verify.js  

<!-- 
deploy at mainnet change to: --network mainnet
deploy parameters and deployed addresses are saved in scripts/deployParams.json

verify a single contract:
npx hardhat verify --network rinkeby --contract contracts/Mooney.sol:Mooney  <your deployed address> 
-->
```
Contracts
=========
