testGovernor Hardhat Project
=======================

npm install @openzeppelin/contracts  
<<<<<<< HEAD
npm install @openzeppelin/contracts-upgradeable  
npm install --save-dev @openzeppelin/test-helpers
npm install --save-dev @nomiclabs/hardhat-web3 web3
<!-- npm install @chainlink/contracts --save   -->
npm i @nomiclabs/hardhat-waffle   
npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@\^5.0.0'  
npm i @nomiclabs/hardhat-etherscan 
<!-- npm install --dotenv -extended   -->
npm install dotenv 
npm i hardhat-gas-reporter   
npm i solidity-coverage   
npm i fs  
npm i aws-sdk  

=======
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
>>>>>>> 4fc7e3ea7971fba48525a2d5ae2960d3f127994a

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


Contracts
=======================

