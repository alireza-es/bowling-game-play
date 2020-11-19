"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var GamePlay_1 = __importDefault(require("../lib/GamePlay"));
mocha_1.describe('GamePlay Tests', function () {
    mocha_1.describe('Constructor', function () {
        it('Create a GamePlay object should be null', function () {
            //arrange
            var player = "John";
            //act
            var gamePlay = new GamePlay_1.default(player);
            //check
            chai_1.expect(gamePlay).not.to.be.null;
            chai_1.expect(gamePlay.player).to.be.equal(player);
        });
    });
    mocha_1.describe('Rolling the game', function () {
        it('Roll once and check the score', function () {
            //arrange
            var gamePlay = new GamePlay_1.default('John');
            //act
            gamePlay.roll('54');
            //check
            chai_1.expect(gamePlay.ScoreBoard.totalScore).to.be.equal(9);
        });
        it('Roll 10 times with normal knocked down pins', function () {
            //arrange
            var gamePlay = new GamePlay_1.default("Sarah");
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
            chai_1.expect(gamePlay.ScoreBoard).not.null;
            chai_1.expect(gamePlay.ScoreBoard.frames.length).equal(10);
            chai_1.expect(gamePlay.ScoreBoard.totalScore).equal(41);
        });
    });
});
