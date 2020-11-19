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
        it('Roll the game with a spare frame', () => {
            //arrange
            var gamePlay = new GamePlay('John');

            //act
            gamePlay.roll('7/');
            gamePlay.roll('13');

            //check

            expect(gamePlay.ScoreBoard.totalScore).equal(15);
            expect(gamePlay.ScoreBoard.frames[0].score).equal(11);
            expect(gamePlay.ScoreBoard.frames[0].totalScoreSoFar).equal(11);
            expect(gamePlay.ScoreBoard.frames[1].score).equal(4);
            expect(gamePlay.ScoreBoard.frames[1].totalScoreSoFar).equal(15);
        })
        it('Roll the game with a strike frame', () => {
            //arrange
            var gamePlay = new GamePlay('John');

            //act
            gamePlay.roll('X');
            gamePlay.roll('23');

            //check

            expect(gamePlay.ScoreBoard.totalScore).equal(20);
            expect(gamePlay.ScoreBoard.frames[0].score).equal(15);
            expect(gamePlay.ScoreBoard.frames[0].totalScoreSoFar).equal(15);
            expect(gamePlay.ScoreBoard.frames[1].score).equal(5);
            expect(gamePlay.ScoreBoard.frames[1].totalScoreSoFar).equal(20);
        })
        // it('Roll the game with two strike frame', () => {
        //     //arrange
        //     var gamePlay = new GamePlay('John');

        //     //act
        //     gamePlay.roll('X');
        //     gamePlay.roll('X');
        //     gamePlay.roll('31');

        //     //check

        //     expect(gamePlay.ScoreBoard.totalScore).equal(41);
        // })
    })
    describe('Reset the game', () => {
        it('If reset the game, scoreboard should be reset', () => {
            //arrange
            let gamePlay = new GamePlay("John");
            gamePlay.roll('7/');

            //act
            gamePlay.reset();

            //check
            expect(gamePlay.ScoreBoard.totalScore).equal(0);
            expect(gamePlay.ScoreBoard.frames.length).equal(0);


        })
    })
})
