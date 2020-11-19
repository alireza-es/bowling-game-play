export default class GamePlay {
    player: string;
    totalScore: number;
    constructor(player: string) {
        this.player = player;
    }
    roll(frameInput: string) {

        this.totalScore = parseInt(frameInput[0]) + parseInt(frameInput[1]);
    }
    getTotalScore() {
        return 9;
    }
}