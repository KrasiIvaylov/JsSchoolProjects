const { expect } = require('chai');
const isSymetric = ('./isSymetric');

describe('isSymetric', () => {
    it('works with valid input', () => {
        expect(isSymetric([1, 1])).to.be.true;
    })
})