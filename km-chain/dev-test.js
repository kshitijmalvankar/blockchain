const Block = require('./block');

// const block = new Block("Timestamp","LastHash","Hash","Data");
// console.log(block.toString());
// console.log(Block.genesis().toString());

const firstBlock = Block.mineBlock(Block.genesis(), 'firstBlock');

console.log(firstBlock.toString());