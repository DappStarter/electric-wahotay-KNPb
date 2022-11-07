require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind umbrella half knife blue venture'; 
let testAccounts = [
"0xa6c6e4424ebec5051036a224390926f75f955d9a8feae14c191f5196270b0257",
"0x5d65e8897291c064296b439aca75ac342b0903d129ff0675ab22dead5efae264",
"0x3588e08b027b8306a45f1c66128da9d6b9d625a4460af4f192bcd6ee23949122",
"0x9c9e967064b7cc49b96c96d431b8271ce42756355fac49929883a73f2c27c883",
"0xf6c86f4f29382a2867f188f6b78ae3deabfb668cd2b7a51ba6aba5c90d98f69c",
"0x8c7ec33b511b5b75a4eb6a5bca0471828b5c9bbc1398397060c4f5e700c933ad",
"0x6d9514cbb9bcaa3d91b4c1b749e6c947f00026d643ecb14d6479480549d0fb99",
"0x15172a2d44e8d89c2ac5daac13c87c9d84ba41125ce437f574cbc1ef8fee25b0",
"0xe111a42046e112c7657cc2a5c88b98488947401c6853fa7f8fb3ec9addd2e000",
"0xb034874ba6f7dd93928c0c81c28bdbe544b5e75c7cdd9a66b221651ed2e1db96"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


