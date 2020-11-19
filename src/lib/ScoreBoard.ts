import Frame from './Frame'

export default class ScoreBoard {
    totalScore: number;
    frames: Frame[];
    constructor() {
        this.totalScore = 0;
        this.frames = [];
    }
    addFrame(frame: Frame) {
        this.frames.push(frame);
        this.update();
    }
    private get lastFrame() { return this.frames[this.length - 1] }
    private get length() { return this.frames.length }
    private update() {
        this.lastFrame.totalScoreSoFar = this.totalScore + this.lastFrame.score;
        this.totalScore = this.lastFrame.totalScoreSoFar;
    }
}
