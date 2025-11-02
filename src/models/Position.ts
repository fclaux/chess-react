export class Position {
    constructor(public readonly x: number, public readonly y: number) {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error(`Invalid position (${x},${y}): must be between 0 and 7`);
        }
    }

    equals(other: Position): boolean {
        return this.x === other.x && this.y === other.y;
    }

    static fromChessNotation(notation: string): Position {
        const files = "abcdefgh";
        const x = files.indexOf(notation[0].toLowerCase());
        const y = parseInt(notation[1]) - 1;
        if (x === -1 || isNaN(y)) {
            throw new Error(`Invalid chess notation: ${notation}`);
        }
        return new Position(x, y);
    }
}