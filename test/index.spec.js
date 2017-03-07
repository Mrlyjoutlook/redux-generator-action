const generatorAction = require('../lib/'),
      expect = require('chai').expect;

const doDispatch = () => {};
  const doGetState = () => {};

describe('Test array', function () {
    it('正常按顺序执行', function () {
        const action = [
            {type:'AA'},
            {type:'BB'},
            {type:'CC'}
        ];
        var spy = chai.spy(next);
        sequenceAction({})(spy)(action);

        expect(spy).to.have.been.called.with(action);
    });
});

describe('Test whether the array contains an array', function () {
    it('adaw', function () {
        expect(generatorAction(1, 1)).to.be.equal(2);
    });
});

describe('Test whether the array contains an object(type is all)', function () {
    it('adaw', function () {
        expect(generatorAction(1, 1)).to.be.equal(2);
    });
});

describe('Test whether the array contains an object(type is race)', function () {
    it('adaw', function () {
        expect(generatorAction(1, 1)).to.be.equal(2);
    });
});

describe('Test whether the array contains an array and an object(type is all or race)', function () {
    it('adaw', function () {
        expect(generatorAction(1, 1)).to.be.equal(2);
    });
});