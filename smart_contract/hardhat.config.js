//https://eth-ropsten.alchemyapi.io/v2/KTnn2MzJyy6sj2WDYqTVrJiVi85SDBY8

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KTnn2MzJyy6sj2WDYqTVrJiVi85SDBY8',
      accounts: ['9b9f123b515572ab4be9002e339328ffddfbd6f72837fe6cc3f62fc1e0cd099c']
    }
  }
}