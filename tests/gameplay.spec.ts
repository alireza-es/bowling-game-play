import { describe } from 'mocha';
import { expect } from 'chai';
import GamePlay from '../src/lib/GamePlay'

describe('GamePlay', () => {
    describe('Rolling the game', () => {
        it('Roll once and check the score', () => {
            //arrange
            let gamePlay = new GamePlay('John');

            //act
            gamePlay.roll('5', '4');

            //check
            expect(gamePlay.getTotalScore()).to.be.equal(9);
        })
    })
})
