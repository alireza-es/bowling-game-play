import { describe } from 'mocha';
import { expect } from 'chai';
import Frame from '../src/lib/Frame'

describe('Frame Tests', () => {
    describe('Constructor', () => {
        it('Create a Frame object should be succeed', () => {
            //arrange
            const frameInput = '71';

            //act
            let frame = new Frame(frameInput);

            //check
            expect(frame).not.to.be.null;
            expect(frame.frameInput).to.be.equal(frameInput);
            expect(frame.totalScoreSoFar).to.be.equal(0);
        })
    })
})
