require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const utils = require('web3-utils')
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

// Set this to the desired Execution Manager Address -- required for the transpiler
process.env.EXECUTION_MANAGER_ADDRESS = process.env.EXECUTION_MANAGER_ADDRESS || "0xA193E42526F1FEA8C99AF609dcEabf30C1c29fAA";
const gasPrice = 0;
const gas = 90000000;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.

    development: {
      host: '127.0.0.1',     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: 108,       // Any network (default: none)
      gasPrice: gasPrice,
      gas: gas,
    },

    // Another network with more advanced options...
    // advanced: {
    //   port: 8777,             // Custom port
    //   network_id: 1342,       // Custom network
    //   gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    //   gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    //   from: <address>,        // Account to send txs from (default: accounts[0])
    //   websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    kovan: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://kovan.infura.io/v3/c7463beadf2144e68646ff049917b716'),
      network_id: 42,
      gas: 6000000,
      gasPrice: utils.toWei('1', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://rinkeby.infura.io/v3/c7463beadf2144e68646ff049917b716'),
      network_id: 4,
      gas: 6000000,
      gasPrice: utils.toWei('1', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'http://ethereum-rpc.trustwalletapp.com'),
      network_id: 1,
      gas: 6000000,
      gasPrice: utils.toWei('2', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },

    // Useful for private networks
    // private: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    //   network_id: 2111,   // This network is yours, in the cloud.
    //   production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // Add path to the solc-transpiler
      version: "./node_modules/@eth-optimism/solc-transpiler",
    }
  }
}
