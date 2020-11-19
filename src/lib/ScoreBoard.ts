import Frame from './Frame'

export default class ScoreBoard {
    totalScore: number;
    frames: Frame[];
    constructor() {
        this.totalScore = 0;
        this.frames = [];
    }
}
