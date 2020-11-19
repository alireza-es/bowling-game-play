import { describe } from 'mocha';
import { expect } from 'chai';
import GamePlay from '../src/lib/GamePlay'

describe('GamePlay', () => {
    describe('Constructor', () => {
        it('Create a GamePlay object should be null', () => {
            //arrange
            var player = "John";

            //act
            let gamePlay = new GamePlay(player);

            //check
            expect(gamePlay).not.to.be.null;
            expect(gamePlay.player).to.be.equal(player);
        });

    })
    describe('Rolling the game', () => {
        it('Roll once and check the score', () => {
            //arrange
            let gamePlay = new GamePlay('John');

            //act
            gamePlay.roll('54');

            //check
            expect(gamePlay.getTotalScore()).to.be.equal(9);
        })
    })
})
