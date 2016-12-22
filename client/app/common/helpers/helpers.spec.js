import HelpersModule from './helpers';

describe('Helpers', () => {
    let factory;

    beforeEach(window.module(HelpersModule));

    beforeEach(inject((_Helpers_) => {
        factory = _Helpers_;
    }));

    describe('Factory', () => {
        it('subtracts down to 0 only', () => {
            let what = 3;
            let from = 1;
            let expectedResult = 0;

            let result = factory.safeSubtract(what, from);

            expect(result).to.eq(expectedResult);
        });
    });
});