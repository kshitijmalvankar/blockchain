const Blockchain = require('./block-chain');
const Block = require('./block');

describe('Blockchain',()=> {
    let bc, bc2;

    beforeEach(()=>{
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('Starts with genesis block',()=>{

        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('Adds a new Block',()=>{
        const data = 'random data';
        bc.addBlock(data);


        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);

    });


    it('Validates a valid chain',()=>{
        bc2.addBlock('random data');

        expect(bc.isValidChain(bc2.chain)).toBe(true);

    });

    it('Invalidates a chain with a currpot genesis block',()=>{
        bc2.chain[0].data = 'Corropt Data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);

    });

    it('Invalidates a corropt chain',()=>{
        bc2.addBlock('random data');
        bc2.chain[1].data = 'corropt data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);


    });

    it('Replaces the chain with valid chain',()=>{
        bc2.addBlock('new Data');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).toEqual(bc2.chain);

    });

    it('Does not Replaces the chain with invalid chain',()=>{
        bc.addBlock('new Data');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).not.toEqual(bc2.chain);

    });


});