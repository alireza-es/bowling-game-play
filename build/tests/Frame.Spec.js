"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var Frame_1 = __importDefault(require("../lib/Frame"));
mocha_1.describe('Frame Tests', function () {
    mocha_1.describe('Constructor', function () {
        it('Create a Frame object should be succeed', function () {
            //arrange
            var frameInput = '71';
            //act
            var frame = new Frame_1.default(frameInput);
            //check
            chai_1.expect(frame).not.null;
            chai_1.expect(frame.frameInput).equal(frameInput);
            chai_1.expect(frame.totalScoreSoFar).equal(0);
        });
    });
});
