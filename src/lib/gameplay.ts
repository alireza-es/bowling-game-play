import ScoreBoard from './ScoreBoard';
import Frame from './Frame';

export default class GamePlay {
    player: string;
    private scoreBoard: ScoreBoard
    constructor(player: string) {
        this.player = player;
        this.scoreBoard = new ScoreBoard();
    }
    roll(frameInput: string) {
        let frame = this.validateFrame(frameInput);

        this.ScoreBoard.frames.push(frame);

        return this.ScoreBoard;
    }
    get ScoreBoard() { return this.scoreBoard }

    private validateFrame(frameInput: string): Frame {
        if (frameInput.length == 0)
            throw new Error('Frame input is required.')
        if (frameInput.length > 2)
            throw new Error('Frame input length should be less than 3 chars.')

        return new Frame(frameInput);
    }

}