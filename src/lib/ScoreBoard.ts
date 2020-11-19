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

    private get lastFrame() { return this.frames[this.length - 1] };
    private get beforeLastFrame() { return this.frames.length > 1 ? this.frames[this.length - 2] : null };
    private get length() { return this.frames.length }

    private update() {
        let shouldUpdateSpareFrame = (this.length > 1) && (this.beforeLastFrame?.isSpare);
        if (shouldUpdateSpareFrame)
            this.updateSpareFrame();

        this.lastFrame.totalScoreSoFar = this.totalScore + this.lastFrame.score;
        this.totalScore = this.lastFrame.totalScoreSoFar;
    }
    private updateSpareFrame() {
        if (!this.beforeLastFrame)
            return;

        let addableScore = parseInt(this.lastFrame.frameInput[0]);
        this.beforeLastFrame.score += addableScore;
        this.beforeLastFrame.totalScoreSoFar += addableScore;
        this.totalScore += addableScore;
    }
}
