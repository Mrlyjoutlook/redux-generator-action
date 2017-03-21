const generatorAction = require('../lib/index'),
      chai = require('chai'),
      spies = require('chai-spies');

      chai.use(spies);
const expect = chai.expect;

describe('Test 简单数组', function () {
    it('正常按顺序执行', function () {

        const doDispatch = () => {};
        const doGetState = () => {};
        const nextMiddleware = generatorAction({dispatch: doDispatch, getState: doGetState});
        
        const action = [
            {type:'AA'},
            {type:'BB'},
            {type:'CC'}
        ];

        chai.assert.isObject(nextMiddleware);
    });
});