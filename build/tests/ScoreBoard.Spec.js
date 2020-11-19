"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var ScoreBoard_1 = __importDefault(require("../lib/ScoreBoard"));
mocha_1.describe('ScoreBoard Tests', function () {
    mocha_1.describe('Constructor', function () {
        it('Create a ScoreBoard object should be succeed', function () {
            //arrange
            //act
            var scoreBoard = new ScoreBoard_1.default();
            //check
            chai_1.expect(scoreBoard).not.null;
            chai_1.expect(scoreBoard.frames.length).equal(0);
        });
    });
});
