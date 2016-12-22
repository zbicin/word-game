import GlobalEventsModule from './global-events';
import chai from 'chai';

describe('GlobalEvents', () => {
    let factory;

    beforeEach(window.module(GlobalEventsModule));

    beforeEach(inject((_GlobalEvents_) => {
        factory = _GlobalEvents_;
    }));

    describe('Factory', () => {
        it('registers new event handlers', () => {
            let result = null;
            let expectedResult = 1;
            let callback = (data) => result = data;

            factory.on('test', callback);
            factory.trigger('test', expectedResult);

            expect(result).to.eq(expectedResult);
        });

        it('deregisters handlers', () => {
            let result = null;
            let expectedResult = null;
            let callback = (data) => result = data;

            let handle = factory.on('test', callback);
            factory.off(handle);
            factory.trigger('test', 1);

            expect(result).to.eq(expectedResult);
        });
        
    });
});