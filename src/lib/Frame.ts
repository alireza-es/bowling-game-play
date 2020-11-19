export default class Frame {
    frameInput: string;
    score: number = 0;
    totalScoreSoFar: number = 0;
    constructor(frameInput: string) {
        this.frameInput = frameInput;
    }
}