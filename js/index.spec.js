import * as sut from './index';

const winStub = {
    console: {
        log: () => {},
    },
};
sut.__Rewire__("win", winStub);

describe("The index module", function() {

    describe("function speak", function() {

        it("Says something", function() {
            spyOn(winStub.console, 'log');

            sut.speak();

            expect(winStub.console.log).toHaveBeenCalled();
        });
    });
});
