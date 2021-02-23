const numberOperations = require('./numberOperations');
const expect = require('chai').expect;

describe("TODO", () => {

    it(' ', function ()  {
        let arr1 = [1, 2, 3, 4, 5, 6];
        let arr2 = [1, 2, 3];
        expect(numberOperations.sumArrays(arr1, arr2)).to.deep.equal([2, 4, 6, 4, 5, 6]);
    });

    it('',  function () {
        let input = 99;
        expect(numberOperations.numberChecker(input)).to.be.equal('The number is lower than 100!');
    });

    it('',  function ()  {
        let input = 100;
        expect(numberOperations.numberChecker(input)).to.be.equal('The number is greater or equal to 100!');
    });

    it(' ', function ()  {
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];
        expect(numberOperations.sumArrays(arr1, arr2)).to.deep.equal([2, 4, 6]);
    });

    it('',  function ()  {
        let input = 101;
        expect(numberOperations.numberChecker(input)).to.be.equal('The number is greater or equal to 100!');
    });

    it(' ', function () {
        expect(numberOperations.powNumber(2)).to.be.equal(4);
    });
    it('',  function () {
        let input = 'sd'
        let error = 'The input is not a number!';
        expect(() => numberOperations.numberChecker(input))
            .to.throw('The input is not a number!');
    });

});
