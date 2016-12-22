import HelpersModule from './helpers';

describe('Helpers', () => {
    let factory;

    beforeEach(window.module(HelpersModule));

    beforeEach(inject((_Helpers_) => {
        factory = _Helpers_;
    }));

    describe('Factory', () => {
        it('subtracts values', () => {
            let what = 1;
            let from = 3;
            let expectedResult = 2;

            let result = factory.safeSubtract(what, from);

            expect(result).to.eq(expectedResult);
        });
        
        it('subtracts down to 0 only', () => {
            let what = 3;
            let from = 1;
            let expectedResult = 0;

            let result = factory.safeSubtract(what, from);

            expect(result).to.eq(expectedResult);
        });

        it('shuffles arrays', () => {
            let source = [ 1, 2, 3 ];
            
            let shuffled = factory.shuffleArray(source);

            expect(shuffled).not.to.eql(source);
        });
    });
});