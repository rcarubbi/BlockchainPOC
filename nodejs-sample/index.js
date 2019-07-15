const Web3 = require('web3')
const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = fs.readFileSync(".secret").toString().trim();
const walletProd = fs.readFileSync(".wallet").toString().trim();

const rpc_endpoint_prod = `http://ethvwtxwa-dns-reg1.brazilsouth.cloudapp.azure.com:8540`;
const rpc_endpoint = `http://127.0.0.1:8545`;

const web3 = new Web3(new HDWalletProvider(mnemonic, rpc_endpoint_prod));
const wallet = "0xf99792f896b4c11e8de8747bc1f2c85b1280c7c2";

const abi = require('./messageManagerABI.json');
const contractAddress = "0x60989B7A14B66178652108f9875CBbdCb53BBBB8";

const MessageManagerContract = new web3.eth.Contract(abi, contractAddress, { defaultAccount: walletProd });

var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
 

MessageManagerContract.methods.setMessage(datetime).send({}, (err, data) => {
    console.log(data);
});

setTimeout(() => {
    MessageManagerContract.methods.getMessage()
        .call({}, (err2, data2) => {
            console.log("Get: " + data2);
        });
}, 4000);




