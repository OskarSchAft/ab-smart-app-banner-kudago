import * as sut from './index';

const winStub = {
    console: {
        log: () => {},
    },
};
sut.__Rewire__('win', winStub);

describe('The index module', () => {

    describe('function speak', () => {

        it('Says something', () => {
            spyOn(winStub.console, 'log');

            sut.speak();

            expect(winStub.console.log).toHaveBeenCalled();
        });
    });
});
