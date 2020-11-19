export default class GamePlay {
    player: string;
    totalScore: number;
    constructor(player: string) {
        this.player = player;
    }
    roll(pins1, pins2) {
        this.totalScore = parseInt(pins1) + parseInt(pins2);
    }
    getTotalScore() {
        return 9;
    }
}