"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreBoard_1 = __importDefault(require("./ScoreBoard"));
var Frame_1 = __importDefault(require("./Frame"));
var GamePlay = /** @class */ (function () {
    function GamePlay(player) {
        this.player = player;
        this.scoreBoard = new ScoreBoard_1.default();
    }
    GamePlay.prototype.roll = function (frameInput) {
        var frame = this.validateFrame(frameInput);
        this.ScoreBoard.frames.push(frame);
        return this.ScoreBoard;
    };
    Object.defineProperty(GamePlay.prototype, "ScoreBoard", {
        get: function () { return this.scoreBoard; },
        enumerable: false,
        configurable: true
    });
    GamePlay.prototype.validateFrame = function (frameInput) {
        if (frameInput.length == 0)
            throw new Error('Frame input is required.');
        if (frameInput.length > 2)
            throw new Error('Frame input length should be less than 3 chars.');
        return new Frame_1.default(frameInput);
    };
    return GamePlay;
}());
exports.default = GamePlay;
