const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});
const { Web3 } = require('web3');
const rpcURL = `${process.env.RPC_URL}/${process.env.INFURA_API_KEY}` // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = process.env.ACCOUNT_ADDRESS // Your account address goes here
// web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })
web3.eth.getBalance(address)
    .then((bal) => console.log(web3.utils.fromWei(bal, 'ether')));
web3.eth.getBlockNumber()
    .then(console.log);
// web3.eth.getAccounts()
//     .then(console.log);
web3.eth.getGasPrice()
    .then(console.log);
