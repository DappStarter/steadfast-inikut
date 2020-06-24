require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn pudding hover ensure tail truck'; 
let testAccounts = [
"0x4ed70d18c2271e336b0c3e46b36eb05dec4c8188a4451d779f89350633606735",
"0xb51806c914c9e3c8112d5f67733a34b4895f02b302649a0281a0864131bd1870",
"0x94b9d49fd907b1eff134e9adcfe96a95d1abfd9aeedec8214935dd616c766048",
"0x31ac42bd9f7ae22a314e7dea14b82b74274129e03d9ad3cebd3de648c6c49e19",
"0xfde513ae08446c8972a4b88e0c8705128ace8f475b21ac13dec15865744a2300",
"0x07446402f57b554cf728f743dc6117748ddaff214f99218137acae340977b5e0",
"0x98b91f22f066c03dcd8cf2340979b387108089cb2caf917ccb517814ee451ed2",
"0x3065760d8223b1d2b242fbf4aa68f988436c28b73ab4bd458711c7292bfee6b2",
"0xab158785d147e7288a7fa389cdd7b2cce4a166d54c5cd4f41d6690028c0df2f1",
"0xc171d4ce540ca76eb142fddc02da6210a780c6151f3b7b3af1e8e7cc8b740650"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
