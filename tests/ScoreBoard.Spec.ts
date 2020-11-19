import { describe } from 'mocha';
import { expect } from 'chai';
import ScoreBoard from '../src/lib/ScoreBoard'

describe('ScoreBoard Tests', () => {
    describe('Constructor', () => {
        it('Create a ScoreBoard object should be succeed', () => {
            //arrange

            //act
            let scoreBoard = new ScoreBoard();

            //check
            expect(scoreBoard).not.to.be.null
            expect(scoreBoard.frames.length).to.be.equal(0);
        })
    })
})