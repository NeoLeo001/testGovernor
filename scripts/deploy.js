async function main () {
    // We get the contract to deploy
    const MyGovernor = await ethers.getContractFactory('MyGovernor');
    console.log('Deploying MyGovernor...');
    const myGovernor = await MyGovernor.deploy();
    await myGovernor.deployed();
    console.log('Box deployed to:', myGovernor.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });