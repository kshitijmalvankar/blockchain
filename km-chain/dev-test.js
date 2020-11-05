const Blockchain = require('./blockchain');
const bc = new Blockchain();
const Wallet = require('./wallet')
const wallet = new Wallet();



console.log(wallet.toString());


// for(let i = 0; i<10; i++){
//     console.log(bc.addBlock(`Data ${i}`).toString());
// }