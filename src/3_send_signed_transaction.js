const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});
var Tx = require('ethereumjs-tx').Transaction
const { Web3 } = require('web3');
const rpcURL = `${process.env.RPC_URL}/${process.env.INFURA_API_KEY}` // Your RCkP URL goes here
const web3 = new Web3(rpcURL)

const account1 = process.env.ACCOUNT_1 // Your account address 1
const account2 = process.env.ACCOUNT_2 // Your account address 2

// //check balance
// web3.eth.getBalance(account1)
//     .then((bal) => console.log(web3.utils.fromWei(bal, 'ether')));

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY2, 'hex')

const txCount = 0;
web3.eth.getTransactionCount(account1)
    .then(txCount => {
        txCount = txCount;
    });
// console.log("getTransactionCount: " + txCount);

// Build the transaction
const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
}
// console.log(txObject)

// Sign the transaction
const tx = new Tx(txObject)
tx.sign(privateKey1)

const serializedTx = tx.serialize()
const raw = '0x' + serializedTx.toString('hex')

// Broadcast the transaction
// web3.eth.sendSignedTransaction(raw)
//     .on('receipt', console.log);

web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
})