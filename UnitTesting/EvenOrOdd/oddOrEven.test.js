const {expect} = require('chai');
const string = require('./isOddOrEven');


describe("check isOddOrEven", () => {
  it('is Equal', () => {
    expect(string('a')).to.equal('a');
  });

});
