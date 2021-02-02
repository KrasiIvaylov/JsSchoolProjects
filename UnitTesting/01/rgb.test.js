const {expect} = require('chai');
const rgb = require('./rgb');

describe('rgb', () => {

    it('convers black to hex', () => {
        expect(rgb(0, 0, 0)).to.equal('#000000');
    });

});
