export default class Frame {
    frameInput: string;
    score: number = 0;
    totalScoreSoFar: number = 0;
    constructor(frameInput: string) {
        this.frameInput = frameInput.toUpperCase();
        this.updateScore();
    }
    get isStrike() {
        return this.frameInput.indexOf('X') >= 0;
    }

    get isSpare() {
        return this.frameInput.indexOf('/') >= 0;
    }
    private updateScore() {
        if (this.isStrike || this.isSpare) {
            this.score = 10;
            return;
        }
        this.score = parseInt(this.frameInput[0]);
        this.score += parseInt(this.frameInput[1]);
    }
}