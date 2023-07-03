const { Web3 } = require('web3');
const rpcURL = 'https://mainnet.infura.io/v3/cf13a29513a44652923c85f254b4ec63' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5' // Your account address goes here
// web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })
web3.eth.getBalance(address)
    .then((bal) => console.log(web3.utils.fromWei(bal, 'ether')));
web3.eth.getBlockNumber()
    .then(console.log);
// web3.eth.getAccounts()
//     .then(console.log);
web3.eth.getGasPrice()
    .then(console.log);
