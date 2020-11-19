import { describe } from 'mocha';
import { expect } from 'chai';
import GamePlay from '../lib/GamePlay'

describe('GamePlay Tests', () => {
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
            expect(gamePlay.ScoreBoard.totalScore).to.be.equal(9);
        })
        it('Roll 10 times with normal knocked down pins', () => {
            //arrange
            let gamePlay = new GamePlay("Sarah");

            //act
            gamePlay.roll('01');
            gamePlay.roll('23');
            gamePlay.roll('34');
            gamePlay.roll('22');
            gamePlay.roll('43');
            gamePlay.roll('21');
            gamePlay.roll('45');
            gamePlay.roll('21');
            gamePlay.roll('00');
            gamePlay.roll('11');

            //check
            expect(gamePlay.ScoreBoard).not.null;
            expect(gamePlay.ScoreBoard.frames.length).equal(10);
            expect(gamePlay.ScoreBoard.totalScore).equal(41);
        })
    })
})
