import { describe } from 'mocha';
import { expect } from 'chai';
import Frame from '../lib/Frame'

describe('Frame Tests', () => {
    describe('Constructor', () => {
        it('Create a Frame object should be succeed ', () => {
            //arrange
            const frameInput = '71';

            //act
            let frame = new Frame(frameInput);

            //check
            expect(frame).not.null;
            expect(frame.frameInput).equal(frameInput);
            expect(frame.totalScoreSoFar).equal(0);
        })
    })
})
