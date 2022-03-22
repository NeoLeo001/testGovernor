// hardhat.config.js
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-ethers"); //npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
 require("@nomiclabs/hardhat-waffle");   //npm i @nomiclabs/hardhat-waffle
 require("@nomiclabs/hardhat-etherscan");  //npm install --save-dev @nomiclabs/hardhat-etherscan

 var mnemonic = "panther term please brush sick leopard trial debris lawn rebel pink hour";
 const Whichnet='rinkeby';//ropsten  mainnet
 const ProId='2e5211b727dd45639a75336de306ad36';
 var infura_url = "https://"+Whichnet+".infura.io/v3/"+ProId;
//  var infura_url = "wss://rinkeby.infura.io/ws/v3/c92ad1e77a6141759af697d2d98fc562";
//  var infura_url = "https://eth-rinkeby.alchemyapi.io/v2/27Qh4EflLWDozrlBG0hDX6dWrXH3xJv5";
// var infura_url = "https://speedy-nodes-nyc.moralis.io/574375770416e87c943e3e35/eth/rinkeby";

// const { alchemyApiKey, mnemonic } = require('./secrets.json');
//  url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
module.exports = {
    solidity: "0.8.4",
    // hardhat.config.js

    networks: {
     rinkeby: {
      url: infura_url,      
      accounts: { mnemonic: mnemonic },//accounts: [`0x${Private_Key}`]
     },
   },
  etherscan: {
    apiKey: {
      rinkeby: 'PFP56NR8P8SQ8KH45J9RICIPNJAE7KGUZP'
    }
  }
};